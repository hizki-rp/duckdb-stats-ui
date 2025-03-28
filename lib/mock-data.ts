// Mock data store for tables

// House prices data
export const housePricesData = [
  { id: 1, price: 450000, bedrooms: 3, bathrooms: 2, sqft: 1800, year_built: 2005, location: "Seattle" },
  { id: 2, price: 350000, bedrooms: 2, bathrooms: 1, sqft: 1200, year_built: 1998, location: "Portland" },
  { id: 3, price: 550000, bedrooms: 4, bathrooms: 2.5, sqft: 2400, year_built: 2010, location: "San Francisco" },
  { id: 4, price: 650000, bedrooms: 5, bathrooms: 3, sqft: 2800, year_built: 2015, location: "Los Angeles" },
  { id: 5, price: 250000, bedrooms: 2, bathrooms: 1, sqft: 1000, year_built: 1985, location: "Phoenix" },
  { id: 6, price: 480000, bedrooms: 3, bathrooms: 2, sqft: 1900, year_built: 2008, location: "Seattle" },
  { id: 7, price: 380000, bedrooms: 3, bathrooms: 1.5, sqft: 1500, year_built: 2000, location: "Portland" },
  { id: 8, price: 750000, bedrooms: 4, bathrooms: 3, sqft: 2600, year_built: 2018, location: "San Francisco" },
  { id: 9, price: 520000, bedrooms: 3, bathrooms: 2, sqft: 2000, year_built: 2012, location: "Los Angeles" },
  { id: 10, price: 320000, bedrooms: 3, bathrooms: 2, sqft: 1600, year_built: 1995, location: "Phoenix" },
]

// Weather data
export const weatherData = [
  { id: 1, date: "2023-01-01", temp_max: 45, temp_min: 32, precipitation: 0.5, wind_speed: 10, location: "Seattle" },
  { id: 2, date: "2023-01-02", temp_max: 48, temp_min: 35, precipitation: 0.2, wind_speed: 8, location: "Seattle" },
  { id: 3, date: "2023-01-03", temp_max: 50, temp_min: 38, precipitation: 0, wind_speed: 5, location: "Seattle" },
  { id: 4, date: "2023-01-01", temp_max: 75, temp_min: 60, precipitation: 0, wind_speed: 12, location: "Los Angeles" },
  { id: 5, date: "2023-01-02", temp_max: 78, temp_min: 62, precipitation: 0, wind_speed: 10, location: "Los Angeles" },
  { id: 6, date: "2023-01-03", temp_max: 52, temp_min: 40, precipitation: 0.1, wind_speed: 7, location: "Seattle" },
  { id: 7, date: "2023-01-04", temp_max: 55, temp_min: 42, precipitation: 0, wind_speed: 6, location: "Seattle" },
  { id: 8, date: "2023-01-03", temp_max: 80, temp_min: 65, precipitation: 0, wind_speed: 8, location: "Los Angeles" },
  { id: 9, date: "2023-01-04", temp_max: 82, temp_min: 67, precipitation: 0, wind_speed: 5, location: "Los Angeles" },
  { id: 10, date: "2023-01-05", temp_max: 58, temp_min: 45, precipitation: 0.3, wind_speed: 9, location: "Seattle" },
]

// Flights data
export const flightsData = [
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

// Table metadata
export const tableMetadata = {
  house_prices: {
    columns: [
      { name: "id", type: "INTEGER" },
      { name: "price", type: "INTEGER" },
      { name: "bedrooms", type: "INTEGER" },
      { name: "bathrooms", type: "REAL" },
      { name: "sqft", type: "INTEGER" },
      { name: "year_built", type: "INTEGER" },
      { name: "location", type: "TEXT" },
    ],
    rowCount: 5000, // Simulated total count
  },
  weather: {
    columns: [
      { name: "id", type: "INTEGER" },
      { name: "date", type: "TEXT" },
      { name: "temp_max", type: "INTEGER" },
      { name: "temp_min", type: "INTEGER" },
      { name: "precipitation", type: "REAL" },
      { name: "wind_speed", type: "INTEGER" },
      { name: "location", type: "TEXT" },
    ],
    rowCount: 10000, // Simulated total count
  },
  flights: {
    columns: [
      { name: "id", type: "INTEGER" },
      { name: "flight_id", type: "TEXT" },
      { name: "departure", type: "TEXT" },
      { name: "arrival", type: "TEXT" },
      { name: "departure_time", type: "TEXT" },
      { name: "arrival_time", type: "TEXT" },
      { name: "delay", type: "INTEGER" },
    ],
    rowCount: 1000000, // Simulated total count
  },
}

// Get data for a specific table
export function getTableData(tableName: string, limit = 10, offset = 0) {
  let data: any[] = []

  switch (tableName) {
    case "house_prices":
      data = housePricesData
      break
    case "weather":
      data = weatherData
      break
    case "flights":
      data = flightsData
      break
    default:
      throw new Error(`Unknown table: ${tableName}`)
  }

  // Apply pagination
  const paginatedData = data.slice(offset, offset + limit)

  return {
    data: paginatedData,
    totalCount: tableMetadata[tableName as keyof typeof tableMetadata].rowCount,
  }
}

// Calculate statistics for a table
export function getTableStats(tableName: string) {
  if (!["house_prices", "weather", "flights"].includes(tableName)) {
    throw new Error(`Unknown table: ${tableName}`)
  }

  const metadata = tableMetadata[tableName as keyof typeof tableMetadata]
  let data: any[] = []

  switch (tableName) {
    case "house_prices":
      data = housePricesData
      break
    case "weather":
      data = weatherData
      break
    case "flights":
      data = flightsData
      break
  }

  // Calculate statistics for numeric columns
  const numericStats = metadata.columns
    .filter((col) => ["INTEGER", "REAL", "FLOAT", "DOUBLE", "NUMERIC"].includes(col.type))
    .map((col) => {
      const values = data.map((row) => row[col.name]).filter((val) => val !== null && val !== undefined)

      if (values.length === 0) {
        return {
          column: col.name,
          min: 0,
          max: 0,
          avg: 0,
        }
      }

      const min = Math.min(...values)
      const max = Math.max(...values)
      const sum = values.reduce((acc, val) => acc + val, 0)
      const avg = sum / values.length

      return {
        column: col.name,
        min,
        max,
        avg,
      }
    })

  return {
    rowCount: metadata.rowCount,
    columnCount: metadata.columns.length,
    columns: metadata.columns,
    numericStats,
  }
}

