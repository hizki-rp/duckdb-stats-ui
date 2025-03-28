"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Save, Download, Copy } from "lucide-react"
import { useDuckDBConnection } from "@/hooks/use-duckdb"

export function QueryEditor() {
  const [query, setQuery] = useState("SELECT * FROM information_schema.tables LIMIT 10;")
  const { executeQuery, loading } = useDuckDBConnection()

  const handleExecuteQuery = async () => {
    if (query.trim()) {
      await executeQuery(query)
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Query Editor</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm" onClick={handleExecuteQuery} disabled={loading}>
            <Play className="h-4 w-4 mr-2" />
            Run
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="editor-container">
          <textarea
            className="w-full h-full p-4 font-mono text-sm bg-background resize-none focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={10}
            placeholder="Enter SQL query..."
          />
        </div>
      </CardContent>
    </Card>
  )
}

