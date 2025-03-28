// We'll use a client-side only approach with mock data instead of DuckDB
// This avoids WASM loading issues in Next.js

// Define table types
export interface HousePrice {
  id: number
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  year_built: number
  location: string
}

export interface Weather {
  id: number
  date: string
  temp_max: number
  temp_min: number
  precipitation: number
  wind_speed: number
  location: string
}

export interface Flight {
  id: number
  flight_id: string
  departure: string
  arrival: string
  departure_time: string
  arrival_time: string
  delay: number
}

// Mock data
const housePricesData: HousePrice[] = [
  { id: 1, price: 450000, bedrooms: 3, bathrooms: 2.0, sqft: 1800, year_built: 2005, location: "Seattle" },
  { id: 2, price: 350000, bedrooms: 2, bathrooms: 1.0, sqft: 1200, year_built: 1998, location: "Portland" },
  { id: 3, price: 550000, bedrooms: 4, bathrooms: 2.5, sqft: 2400, year_built: 2010, location: "San Francisco" },
  { id: 4, price: 650000, bedrooms: 5, bathrooms: 3.0, sqft: 2800, year_built: 2015, location: "Los Angeles" },
  { id: 5, price: 250000, bedrooms: 2, bathrooms: 1.0, sqft: 1000, year_built: 1985, location: "Phoenix" },
  { id: 6, price: 480000, bedrooms: 3, bathrooms: 2.0, sqft: 1900, year_built: 2008, location: "Seattle" },
  { id: 7, price: 380000, bedrooms: 3, bathrooms: 1.5, sqft: 1500, year_built: 2000, location: "Portland" },
  { id: 8, price: 750000, bedrooms: 4, bathrooms: 3.0, sqft: 2600, year_built: 2018, location: "San Francisco" },
  { id: 9, price: 520000, bedrooms: 3, bathrooms: 2.0, sqft: 2000, year_built: 2012, location: "Los Angeles" },
  { id: 10, price: 320000, bedrooms: 3, bathrooms: 2.0, sqft: 1600, year_built: 1995, location: "Phoenix" },
]

const weatherData: Weather[] = [
  { id: 1, date: "2023-01-01", temp_max: 45, temp_min: 32, precipitation: 0.5, wind_speed: 10, location: "Seattle" },
  { id: 2, date: "2023-01-02", temp_max: 48, temp_min: 35, precipitation: 0.2, wind_speed: 8, location: "Seattle" },
  { id: 3, date: "2023-01-03", temp_max: 50, temp_min: 38, precipitation: 0.0, wind_speed: 5, location: "Seattle" },
  {
    id: 4,
    date: "2023-01-01",
    temp_max: 75,
    temp_min: 60,
    precipitation: 0.0,
    wind_speed: 12,
    location: "Los Angeles",
  },
  {
    id: 5,
    date: "2023-01-02",
    temp_max: 78,
    temp_min: 62,
    precipitation: 0.0,
    wind_speed: 10,
    location: "Los Angeles",
  },
  { id: 6, date: "2023-01-03", temp_max: 52, temp_min: 40, precipitation: 0.1, wind_speed: 7, location: "Seattle" },
  { id: 7, date: "2023-01-04", temp_max: 55, temp_min: 42, precipitation: 0.0, wind_speed: 6, location: "Seattle" },
  { id: 8, date: "2023-01-03", temp_max: 80, temp_min: 65, precipitation: 0.0, wind_speed: 8, location: "Los Angeles" },
  { id: 9, date: "2023-01-04", temp_max: 82, temp_min: 67, precipitation: 0.0, wind_speed: 5, location: "Los Angeles" },
  { id: 10, date: "2023-01-05", temp_max: 58, temp_min: 45, precipitation: 0.3, wind_speed: 9, location: "Seattle" },
]

const flightsData: Flight[] = [
  {
    id: 1,
    flight_id: "AA123",
    departure: "SEA",
    arrival: "LAX",
    departure_time: "2023-01-01 08:00:00",
    arrival_time: "2023-01-01 10:30:00",
    delay: 0,
  },
  {
    id: 2,
    flight_id: "DL456",
    departure: "LAX",
    arrival: "JFK",
    departure_time: "2023-01-01 12:00:00",
    arrival_time: "2023-01-01 20:30:00",
    delay: 15,
  },
  {
    id: 3,
    flight_id: "UA789",
    departure: "ORD",
    arrival: "DFW",
    departure_time: "2023-01-01 14:00:00",
    arrival_time: "2023-01-01 16:30:00",
    delay: 5,
  },
  {
    id: 4,
    flight_id: "SW012",
    departure: "DFW",
    arrival: "LAS",
    departure_time: "2023-01-01 18:00:00",
    arrival_time: "2023-01-01 19:30:00",
    delay: 0,
  },
  {
    id: 5,
    flight_id: "JB345",
    departure: "JFK",
    arrival: "MIA",
    departure_time: "2023-01-01 20:00:00",
    arrival_time: "2023-01-01 23:30:00",
    delay: 30,
  },
  {
    id: 6,
    flight_id: "AA456",
    departure: "LAX",
    arrival: "SEA",
    departure_time: "2023-01-02 09:00:00",
    arrival_time: "2023-01-02 11:30:00",
    delay: 10,
  },
  {
    id: 7,
    flight_id: "DL789",
    departure: "JFK",
    arrival: "LAX",
    departure_time: "2023-01-02 11:00:00",
    arrival_time: "2023-01-02 14:30:00",
    delay: 0,
  },
  {
    id: 8,
    flight_id: "UA012",
    departure: "DFW",
    arrival: "ORD",
    departure_time: "2023-01-02 13:00:00",
    arrival_time: "2023-01-02 15:30:00",
    delay: 20,
  },
  {
    id: 9,
    flight_id: "SW345",
    departure: "LAS",
    arrival: "DFW",
    departure_time: "2023-01-02 16:00:00",
    arrival_time: "2023-01-02 19:30:00",
    delay: 5,
  },
  {
    id: 10,
    flight_id: "JB678",
    departure: "MIA",
    arrival: "JFK",
    departure_time: "2023-01-02 18:00:00",
    arrival_time: "2023-01-02 21:30:00",
    delay: 0,
  },
]

// Data access functions
export async function getTableData(tableName: string, limit = 100, offset = 0): Promise<any[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  switch (tableName) {
    case "house_prices":
      return housePricesData.slice(offset, offset + limit)
    case "weather":
      return weatherData.slice(offset, offset + limit)
    case "flights":
      return flightsData.slice(offset, offset + limit)
    default:
      throw new Error("Invalid table name")
  }
}

export async function getTableStats(tableName: string) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  let data: any[] = []
  let columns: { name: string; type: string }[] = []

  switch (tableName) {
    case "house_prices":
      data = housePricesData
      columns = [
        { name: "id", type: "INTEGER" },
        { name: "price", type: "INTEGER" },
        { name: "bedrooms", type: "INTEGER" },
        { name: "bathrooms", type: "FLOAT" },
        { name: "sqft", type: "INTEGER" },
        { name: "year_built", type: "INTEGER" },
        { name: "location", type: "VARCHAR" },
      ]
      break
    case "weather":
      data = weatherData
      columns = [
        { name: "id", type: "INTEGER" },
        { name: "date", type: "VARCHAR" },
        { name: "temp_max", type: "INTEGER" },
        { name: "temp_min", type: "INTEGER" },
        { name: "precipitation", type: "FLOAT" },
        { name: "wind_speed", type: "INTEGER" },
        { name: "location", type: "VARCHAR" },
      ]
      break
    case "flights":
      data = flightsData
      columns = [
        { name: "id", type: "INTEGER" },
        { name: "flight_id", type: "VARCHAR" },
        { name: "departure", type: "VARCHAR" },
        { name: "arrival", type: "VARCHAR" },
        { name: "departure_time", type: "VARCHAR" },
        { name: "arrival_time", type: "VARCHAR" },
        { name: "delay", type: "INTEGER" },
      ]
      break
    default:
      throw new Error("Invalid table name")
  }

  // Calculate numeric stats
  const numericStats = columns
    .filter((col) => ["INTEGER", "FLOAT", "DOUBLE", "DECIMAL", "BIGINT"].includes(col.type.toUpperCase()))
    .map((col) => {
      const values = data.map((row) => row[col.name]).filter((val) => val !== null && val !== undefined)
      return {
        column: col.name,
        min: Math.min(...values),
        max: Math.max(...values),
        avg: values.reduce((sum, val) => sum + val, 0) / values.length,
      }
    })

  return {
    rowCount: data.length,
    columnCount: columns.length,
    columns,
    numericStats,
  }
}

export async function getDB() {
  return {}
}

