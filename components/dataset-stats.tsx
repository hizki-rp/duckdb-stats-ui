import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface DatasetStatsProps {
  stats: {
    rowCount: number
    columnCount: number
    columns: { name: string; type: string }[]
    numericStats: { column: string; min: number; max: number; avg: number }[]
  }
}

export function DatasetStats({ stats }: DatasetStatsProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Rows</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.rowCount.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Columns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.columnCount}</div>
          </CardContent>
        </Card>
      </div>

      {stats.numericStats.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Numeric Column Statistics</CardTitle>
            <CardDescription>Statistical summary of numeric columns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">Column</th>
                    <th className="text-left py-2 px-4">Min</th>
                    <th className="text-left py-2 px-4">Max</th>
                    <th className="text-left py-2 px-4">Average</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.numericStats.map((stat, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                      <td className="py-2 px-4 font-medium">{stat.column}</td>
                      <td className="py-2 px-4">{formatNumber(stat.min)}</td>
                      <td className="py-2 px-4">{formatNumber(stat.max)}</td>
                      <td className="py-2 px-4">{formatNumber(stat.avg)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Schema</CardTitle>
          <CardDescription>Table structure and column types</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Column Name</th>
                  <th className="text-left py-2 px-4">Data Type</th>
                </tr>
              </thead>
              <tbody>
                {stats.columns.map((column, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                    <td className="py-2 px-4 font-medium">{column.name}</td>
                    <td className="py-2 px-4">{column.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function formatNumber(value: number): string {
  if (Number.isInteger(value)) {
    return value.toLocaleString()
  }
  return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

