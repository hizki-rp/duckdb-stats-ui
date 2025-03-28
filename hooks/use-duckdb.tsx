"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"

// Mock data for demonstration purposes
const mockTableData = [
  {
    table_catalog: "main",
    table_schema: "information_schema",
    table_name: "tables",
    table_type: "BASE TABLE",
    is_insertable_into: "YES",
  },
  {
    table_catalog: "main",
    table_schema: "information_schema",
    table_name: "columns",
    table_type: "BASE TABLE",
    is_insertable_into: "YES",
  },
  {
    table_catalog: "main",
    table_schema: "main",
    table_name: "users",
    table_type: "BASE TABLE",
    is_insertable_into: "YES",
  },
  {
    table_catalog: "main",
    table_schema: "main",
    table_name: "orders",
    table_type: "BASE TABLE",
    is_insertable_into: "YES",
  },
  {
    table_catalog: "main",
    table_schema: "main",
    table_name: "products",
    table_type: "BASE TABLE",
    is_insertable_into: "YES",
  },
]

type DuckDBContextType = {
  results: any[] | null
  loading: boolean
  error: string | null
  executeQuery: (query: string) => Promise<void>
}

const DuckDBContext = createContext<DuckDBContextType | undefined>(undefined)

export function DuckDBProvider({ children }: { children: React.ReactNode }) {
  const [results, setResults] = useState<any[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // In a real implementation, this would initialize the DuckDB WASM module
  useEffect(() => {
    // Initialize DuckDB here
    console.log("Initializing DuckDB connection...")
  }, [])

  const executeQuery = async (query: string) => {
    setLoading(true)
    setError(null)

    try {
      // Simulate query execution delay
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Mock implementation - in a real app, this would execute the query using DuckDB
      console.log("Executing query:", query)

      // Return mock data for demonstration
      if (query.toLowerCase().includes("information_schema.tables")) {
        setResults(mockTableData)
      } else if (query.toLowerCase().includes("error")) {
        throw new Error("Query execution failed")
      } else {
        // Generate random data for other queries
        const randomData = Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          name: `Item ${i + 1}`,
          value: Math.floor(Math.random() * 1000),
          date: new Date().toISOString(),
        }))
        setResults(randomData)
      }
    } catch (err) {
      console.error("Error executing query:", err)
      setError(err instanceof Error ? err.message : "Unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  return <DuckDBContext.Provider value={{ results, loading, error, executeQuery }}>{children}</DuckDBContext.Provider>
}

export function useDuckDBConnection() {
  const context = useContext(DuckDBContext)
  if (context === undefined) {
    throw new Error("useDuckDBConnection must be used within a DuckDBProvider")
  }
  return context
}

