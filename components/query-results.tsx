"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useDuckDBConnection } from "@/hooks/use-duckdb"

export function QueryResults() {
  const { results, loading, error } = useDuckDBConnection()

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Results</CardTitle>
        {results && <div className="text-sm text-muted-foreground">{results.length} rows returned</div>}
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="table">
          <TabsList>
            <TabsTrigger value="table">Table</TabsTrigger>
            <TabsTrigger value="json">JSON</TabsTrigger>
          </TabsList>
          <TabsContent value="table" className="mt-2">
            <div className="results-container">
              {loading ? (
                <div className="flex items-center justify-center h-40">
                  <p>Loading results...</p>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center h-40 text-destructive">
                  <p>{error}</p>
                </div>
              ) : !results || results.length === 0 ? (
                <div className="flex items-center justify-center h-40">
                  <p>No results to display. Run a query to see results.</p>
                </div>
              ) : (
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        {Object.keys(results[0]).map((key) => (
                          <th key={key}>{key}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((row, i) => (
                        <tr key={i}>
                          {Object.values(row).map((value, j) => (
                            <td key={j}>{String(value)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="json" className="mt-2">
            <div className="results-container">
              {loading ? (
                <div className="flex items-center justify-center h-40">
                  <p>Loading results...</p>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center h-40 text-destructive">
                  <p>{error}</p>
                </div>
              ) : !results || results.length === 0 ? (
                <div className="flex items-center justify-center h-40">
                  <p>No results to display. Run a query to see results.</p>
                </div>
              ) : (
                <pre className="p-4 text-sm font-mono overflow-auto">{JSON.stringify(results, null, 2)}</pre>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

