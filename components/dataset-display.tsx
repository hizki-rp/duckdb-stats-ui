"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Loader2 } from "lucide-react"
import { DataTable } from "@/components/data-table"
import { fetchTableData, fetchTableStats } from "@/lib/data-fetcher"
import { StatsDisplay } from "@/components/stats-display"

interface DatasetDisplayProps {
  tableName: string
}

export function DatasetDisplay({ tableName }: DatasetDisplayProps) {
  const [data, setData] = useState<any[]>([])
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      setError(null)

      try {
        const [dataResult, statsResult] = await Promise.all([fetchTableData(tableName), fetchTableStats(tableName)])

        setData(dataResult)
        setStats(statsResult)
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err))
        console.error(`Error loading data for ${tableName}:`, err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [tableName])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">Loading data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="data" className="space-y-4">
        <TabsList>
          <TabsTrigger value="data">Data</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>
        <TabsContent value="data">
          <Card>
            <CardHeader>
              <CardTitle className="capitalize">{tableName.replace(/_/g, " ")}</CardTitle>
              <CardDescription>Showing {data.length} rows of data</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable data={data} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stats">
          <StatsDisplay stats={stats} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

