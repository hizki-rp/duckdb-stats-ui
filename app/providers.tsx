"use client"

import type React from "react"

import { DuckDBProvider } from "@/hooks/use-duckdb"

export function Providers({ children }: { children: React.ReactNode }) {
  return <DuckDBProvider>{children}</DuckDBProvider>
}

