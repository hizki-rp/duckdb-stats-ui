import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" text="Manage your DuckDB connection and application preferences" />

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="connection">Connection</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure general application settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="query-limit">Default Query Limit</Label>
                <Input id="query-limit" type="number" defaultValue={1000} />
                <p className="text-sm text-muted-foreground">Maximum number of rows to return in query results</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-save">Auto-save Queries</Label>
                  <Switch id="auto-save" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">Automatically save queries when executed</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="query-history">Save Query History</Label>
                  <Switch id="query-history" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">Save history of executed queries</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="connection">
          <Card>
            <CardHeader>
              <CardTitle>Connection Settings</CardTitle>
              <CardDescription>Configure your DuckDB connection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="db-path">Database Path</Label>
                <Input id="db-path" defaultValue="memory" />
                <p className="text-sm text-muted-foreground">
                  Path to DuckDB database file or "memory" for in-memory database
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="memory-limit">Memory Limit (MB)</Label>
                <Input id="memory-limit" type="number" defaultValue={2048} />
                <p className="text-sm text-muted-foreground">Maximum memory usage for DuckDB</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="read-only">Read-only Mode</Label>
                  <Switch id="read-only" />
                </div>
                <p className="text-sm text-muted-foreground">Open database in read-only mode</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Connection</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize the application appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" className="w-[100px]">
                    Light
                  </Button>
                  <Button variant="outline" className="w-[100px]">
                    Dark
                  </Button>
                  <Button variant="outline" className="w-[100px]">
                    System
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="font-size">Font Size</Label>
                <Input id="font-size" type="number" defaultValue={14} />
                <p className="text-sm text-muted-foreground">Font size for the query editor</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="line-numbers">Show Line Numbers</Label>
                  <Switch id="line-numbers" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">Show line numbers in the query editor</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Appearance</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

