"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DatasetDisplay } from "@/components/dataset-display"

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Data Explorer</h1>
        <p className="text-muted-foreground mt-2">Explore datasets with statistics and visualizations</p>
      </div>

      <Tabs defaultValue="house_prices" className="space-y-4">
        <TabsList>
          <TabsTrigger value="house_prices">House Prices</TabsTrigger>
          <TabsTrigger value="weather">Weather</TabsTrigger>
          <TabsTrigger value="flights">Flights</TabsTrigger>
        </TabsList>
        <TabsContent value="house_prices">
          <DatasetDisplay tableName="house_prices" />
        </TabsContent>
        <TabsContent value="weather">
          <DatasetDisplay tableName="weather" />
        </TabsContent>
        <TabsContent value="flights">
          <DatasetDisplay tableName="flights" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

