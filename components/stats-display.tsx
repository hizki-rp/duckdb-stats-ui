import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface StatsDisplayProps {
  stats: {
    rowCount: number
    columnCount: number
    columns: { name: string; type: string }[]
    numericStats: { column: string; min: number; max: number; avg: number }[]
  }
}

export function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Dataset Overview</CardTitle>
          <CardDescription>Basic statistics about the dataset</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Row Count</div>
              <div className="text-2xl font-bold">{stats.rowCount}</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Column Count</div>
              <div className="text-2xl font-bold">{stats.columnCount}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Column Information</CardTitle>
          <CardDescription>Details about each column in the dataset</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Column Name</TableHead>
                <TableHead>Data Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stats.columns.map((column) => (
                <TableRow key={column.name}>
                  <TableCell className="font-medium">{column.name}</TableCell>
                  <TableCell>{column.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {stats.numericStats.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Numeric Column Statistics</CardTitle>
            <CardDescription>Statistical information about numeric columns</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Column</TableHead>
                  <TableHead>Minimum</TableHead>
                  <TableHead>Maximum</TableHead>
                  <TableHead>Average</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stats.numericStats.map((stat) => (
                  <TableRow key={stat.column}>
                    <TableCell className="font-medium">{stat.column}</TableCell>
                    <TableCell>{stat.min.toLocaleString()}</TableCell>
                    <TableCell>{stat.max.toLocaleString()}</TableCell>
                    <TableCell>{stat.avg.toLocaleString(undefined, { maximumFractionDigits: 2 })}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-6 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={stats.numericStats.map((stat) => ({
                    name: stat.column,
                    min: stat.min,
                    max: stat.max,
                    avg: stat.avg,
                  }))}
                  margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="min" fill="#8884d8" name="Minimum" />
                  <Bar dataKey="avg" fill="#82ca9d" name="Average" />
                  <Bar dataKey="max" fill="#ffc658" name="Maximum" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

