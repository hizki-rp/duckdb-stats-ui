import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Search, Clock, Play, Save, Trash } from "lucide-react"

export default function QueriesPage() {
  // Mock data for saved queries
  const savedQueries = [
    {
      id: 1,
      name: "User Statistics",
      query: "SELECT COUNT(*) as total_users, AVG(age) as avg_age FROM users",
      lastRun: "2023-11-15 14:32",
      runCount: 24,
    },
    {
      id: 2,
      name: "Recent Orders",
      query: "SELECT * FROM orders WHERE order_date > CURRENT_DATE - INTERVAL '7 days'",
      lastRun: "2023-11-14 09:15",
      runCount: 18,
    },
    {
      id: 3,
      name: "Product Inventory",
      query: "SELECT p.name, p.price, i.quantity FROM products p JOIN inventory i ON p.id = i.product_id",
      lastRun: "2023-11-13 16:45",
      runCount: 12,
    },
    {
      id: 4,
      name: "Customer Spending",
      query:
        "SELECT c.name, SUM(o.total) as total_spent FROM customers c JOIN orders o ON c.id = o.customer_id GROUP BY c.name ORDER BY total_spent DESC",
      lastRun: "2023-11-12 11:20",
      runCount: 9,
    },
    {
      id: 5,
      name: "Out of Stock Products",
      query: "SELECT p.name FROM products p JOIN inventory i ON p.id = i.product_id WHERE i.quantity = 0",
      lastRun: "2023-11-11 15:30",
      runCount: 15,
    },
  ]

  return (
    <DashboardShell>
      <DashboardHeader heading="Saved Queries" text="View and manage your saved SQL queries">
        <Button>
          <Save className="mr-2 h-4 w-4" />
          New Query
        </Button>
      </DashboardHeader>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>Your Queries</CardTitle>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search queries..." className="w-[200px] pl-8 md:w-[300px]" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Query</TableHead>
                <TableHead>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    Last Run
                  </div>
                </TableHead>
                <TableHead className="text-right">Run Count</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {savedQueries.map((query) => (
                <TableRow key={query.id}>
                  <TableCell className="font-medium">{query.name}</TableCell>
                  <TableCell className="max-w-md truncate">{query.query}</TableCell>
                  <TableCell>{query.lastRun}</TableCell>
                  <TableCell className="text-right">{query.runCount}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Save className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
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

