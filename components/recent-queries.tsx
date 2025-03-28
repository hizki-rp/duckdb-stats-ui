import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RecentQueries() {
  const recentQueries = [
    {
      id: 1,
      query: "SELECT * FROM information_schema.tables LIMIT 10;",
      timestamp: "2023-11-15T14:32:00Z",
      duration: "45ms",
    },
    {
      id: 2,
      query: "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'users';",
      timestamp: "2023-11-15T14:28:00Z",
      duration: "38ms",
    },
    {
      id: 3,
      query: "SELECT COUNT(*) FROM orders WHERE order_date > '2023-01-01';",
      timestamp: "2023-11-15T14:25:00Z",
      duration: "62ms",
    },
    {
      id: 4,
      query:
        "SELECT customer_id, SUM(total) AS total_spent FROM orders GROUP BY customer_id ORDER BY total_spent DESC LIMIT 5;",
      timestamp: "2023-11-15T14:20:00Z",
      duration: "78ms",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Recent Queries</CardTitle>
        <Button variant="ghost" size="sm">
          View all
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentQueries.map((item) => (
            <div key={item.id} className="flex flex-col space-y-2 rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {new Date(item.timestamp).toLocaleString()}
                  <span className="mx-2">•</span>
                  {item.duration}
                </div>
                <Button variant="ghost" size="sm">
                  Run again
                </Button>
              </div>
              <div className="font-mono text-sm truncate">{item.query}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

