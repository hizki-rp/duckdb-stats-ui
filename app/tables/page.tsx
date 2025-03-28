import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Search, RefreshCw } from "lucide-react"

export default function TablesPage() {
  // Mock data for tables
  const tables = [
    { name: "users", schema: "main", rows: 1250, size: "2.4 MB", lastModified: "2023-11-10" },
    { name: "orders", schema: "main", rows: 5432, size: "8.7 MB", lastModified: "2023-11-12" },
    { name: "products", schema: "main", rows: 876, size: "1.2 MB", lastModified: "2023-11-08" },
    { name: "customers", schema: "main", rows: 1543, size: "3.1 MB", lastModified: "2023-11-11" },
    { name: "inventory", schema: "main", rows: 2134, size: "4.5 MB", lastModified: "2023-11-09" },
    { name: "categories", schema: "main", rows: 45, size: "0.1 MB", lastModified: "2023-11-05" },
  ]

  return (
    <DashboardShell>
      <DashboardHeader heading="Tables" text="View and manage your database tables" />
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>Database Tables</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search tables..." className="w-[200px] pl-8 md:w-[300px]" />
            </div>
            <Button variant="outline" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Schema</TableHead>
                <TableHead className="text-right">Rows</TableHead>
                <TableHead className="text-right">Size</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tables.map((table) => (
                <TableRow key={table.name}>
                  <TableCell className="font-medium">{table.name}</TableCell>
                  <TableCell>{table.schema}</TableCell>
                  <TableCell className="text-right">{table.rows.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{table.size}</TableCell>
                  <TableCell>{table.lastModified}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardShell>
  )
}

