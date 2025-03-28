import Database from "better-sqlite3"
import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"
import { dirname } from "path"

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Database file path
const DB_PATH = path.join(process.cwd(), "data", "duckdb.db")

// Ensure the data directory exists
const dataDir = path.join(process.cwd(), "data")
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Create or connect to the database
let db: Database.Database

try {
  db = new Database(DB_PATH)
  console.log("Connected to SQLite database at:", DB_PATH)

  // Check if tables exist and create them if they don't
  initializeTables()
} catch (error) {
  console.error("Error initializing database:", error)
  throw error
}

function initializeTables() {
  // Check if initialization has been done
  const tableExists = db
    .prepare(`
    SELECT name FROM sqlite_master 
    WHERE type='table' AND name='house_prices'
  `)
    .get()

  if (!tableExists) {
    console.log("Initializing database tables...")

    // Create house_prices table with sample data
    db.prepare(`
      CREATE TABLE house_prices (
        id INTEGER PRIMARY KEY,
        price INTEGER,
        bedrooms INTEGER,
        bathrooms REAL,
        sqft INTEGER,
        year_built INTEGER,
        location TEXT
      )
    `).run()

    // Insert sample data
    const housePricesStmt = db.prepare(`
      INSERT INTO house_prices (price, bedrooms, bathrooms, sqft, year_built, location)
      VALUES (?, ?, ?, ?, ?, ?)
    `)

    // Sample data
    const housePricesData = [
      [450000, 3, 2, 1800, 2005, "Seattle"],
      [350000, 2, 1, 1200, 1998, "Portland"],
      [550000, 4, 2.5, 2400, 2010, "San Francisco"],
      [650000, 5, 3, 2800, 2015, "Los Angeles"],
      [250000, 2, 1, 1000, 1985, "Phoenix"],
    ]

    for (const row of housePricesData) {
      housePricesStmt.run(...row)
    }

    // Create weather table with sample data
    db.prepare(`
      CREATE TABLE weather (
        id INTEGER PRIMARY KEY,
        date TEXT,
        temp_max INTEGER,
        temp_min INTEGER,
        precipitation REAL,
        wind_speed INTEGER,
        location TEXT
      )
    `).run()

    // Insert sample data
    const weatherStmt = db.prepare(`
      INSERT INTO weather (date, temp_max, temp_min, precipitation, wind_speed, location)
      VALUES (?, ?, ?, ?, ?, ?)
    `)

    // Sample data
    const weatherData = [
      ["2023-01-01", 45, 32, 0.5, 10, "Seattle"],
      ["2023-01-02", 48, 35, 0.2, 8, "Seattle"],
      ["2023-01-03", 50, 38, 0, 5, "Seattle"],
      ["2023-01-01", 75, 60, 0, 12, "Los Angeles"],
      ["2023-01-02", 78, 62, 0, 10, "Los Angeles"],
    ]

    for (const row of weatherData) {
      weatherStmt.run(...row)
    }

    // Create flights table with sample data
    db.prepare(`
      CREATE TABLE flights (
        id INTEGER PRIMARY KEY,
        flight_id TEXT,
        departure TEXT,
        arrival TEXT,
        departure_time TEXT,
        arrival_time TEXT,
        delay INTEGER
      )
    `).run()

    // Insert sample data
    const flightsStmt = db.prepare(`
      INSERT INTO flights (flight_id, departure, arrival, departure_time, arrival_time, delay)
      VALUES (?, ?, ?, ?, ?, ?)
    `)

    // Sample data
    const flightsData = [
      ["AA123", "SEA", "LAX", "2023-01-01 08:00:00", "2023-01-01 10:30:00", 0],
      ["DL456", "LAX", "JFK", "2023-01-01 12:00:00", "2023-01-01 20:30:00", 15],
      ["UA789", "ORD", "DFW", "2023-01-01 14:00:00", "2023-01-01 16:30:00", 5],
      ["SW012", "DFW", "LAS", "2023-01-01 18:00:00", "2023-01-01 19:30:00", 0],
      ["JB345", "JFK", "MIA", "2023-01-01 20:00:00", "2023-01-01 23:30:00", 30],
    ]

    for (const row of flightsData) {
      flightsStmt.run(...row)
    }

    console.log("Database tables initialized with sample data")
  } else {
    console.log("Database tables already exist")
  }
}

export async function getTableData(tableName: string, limit = 100, offset = 0) {
  try {
    // Validate table name to prevent SQL injection
    if (!["house_prices", "weather", "flights"].includes(tableName)) {
      throw new Error("Invalid table name")
    }

    const rows = db.prepare(`SELECT * FROM ${tableName} LIMIT ? OFFSET ?`).all(limit, offset)

    // Get total count
    const countResult = db.prepare(`SELECT COUNT(*) as count FROM ${tableName}`).get()
    const totalCount = countResult ? countResult.count : 0

    return {
      data: rows,
      totalCount,
    }
  } catch (error) {
    console.error(`Error fetching data from ${tableName}:`, error)
    throw error
  }
}

export async function getTableStats(tableName: string) {
  try {
    // Validate table name to prevent SQL injection
    if (!["house_prices", "weather", "flights"].includes(tableName)) {
      throw new Error("Invalid table name")
    }

    // Get row count
    const countResult = db.prepare(`SELECT COUNT(*) as count FROM ${tableName}`).get()
    const rowCount = countResult ? countResult.count : 0

    // Get column info
    const tableInfo = db.prepare(`PRAGMA table_info(${tableName})`).all()
    const columns = tableInfo.map((col) => ({
      name: col.name,
      type: col.type,
    }))

    // Get numeric columns
    const numericColumns = columns.filter((col) =>
      ["INTEGER", "REAL", "FLOAT", "DOUBLE", "NUMERIC"].includes(col.type.toUpperCase()),
    )

    // Get stats for numeric columns
    const numericStats = numericColumns.map((col) => {
      const stats = db
        .prepare(`
        SELECT 
          MIN(${col.name}) as min,
          MAX(${col.name}) as max,
          AVG(${col.name}) as avg
        FROM ${tableName}
        WHERE ${col.name} IS NOT NULL
      `)
        .get()

      return {
        column: col.name,
        min: stats.min || 0,
        max: stats.max || 0,
        avg: stats.avg || 0,
      }
    })

    return {
      rowCount,
      columnCount: columns.length,
      columns,
      numericStats,
    }
  } catch (error) {
    console.error(`Error fetching stats for ${tableName}:`, error)
    throw error
  }
}

export function getDatabase() {
  return db
}

export default db

