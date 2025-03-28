"use client"

import { useState } from "react"
import { Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CloneInstructions() {
  const [showOutput, setShowOutput] = useState(false)

  return (
    <div className="container mx-auto py-10 space-y-8 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">DuckDB Stats UI</h1>
        <p className="text-muted-foreground">A user interface for visualizing DuckDB statistics</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Clone Repository
          </CardTitle>
          <CardDescription>Follow these steps to clone and set up the repository locally</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold">Step 1: Clone the repository</h3>
            <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
              git clone https://github.com/hizki-rp/duckdb-stats-ui.git
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Step 2: Navigate to the project directory</h3>
            <div className="bg-muted p-3 rounded-md font-mono text-sm">cd duckdb-stats-ui</div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Step 3: Install dependencies</h3>
            <div className="bg-muted p-3 rounded-md font-mono text-sm">
              # Using npm npm install # OR using pnpm (recommended as the project uses pnpm-lock.yaml) pnpm install # OR
              using yarn yarn install
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Step 4: Start the development server</h3>
            <div className="bg-muted p-3 rounded-md font-mono text-sm">
              # Using npm npm run dev # OR using pnpm pnpm dev # OR using yarn yarn dev
            </div>
          </div>

          <Button variant="outline" onClick={() => setShowOutput(!showOutput)} className="mt-4">
            {showOutput ? "Hide" : "Show"} Expected Output
          </Button>

          {showOutput && (
            <div className="bg-muted p-3 rounded-md font-mono text-sm text-muted-foreground">
              <p>ready - started server on 0.0.0.0:3000, url: http://localhost:3000</p>
              <p>info - Loaded env from .env.local</p>
              <p>event - compiled client and server successfully in XXXms</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
          <p className="text-sm text-muted-foreground">
            After running the development server, you can access the application at{" "}
            <span className="font-semibold">http://localhost:3000</span>
          </p>
          <p className="text-sm text-muted-foreground">
            This project appears to be a Next.js application with TypeScript, Tailwind CSS, and other modern web
            development tools.
          </p>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Structure</CardTitle>
          <CardDescription>Key directories and files in the repository</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="font-semibold">app/</span>
              <span className="text-muted-foreground">Next.js App Router directory containing pages and routes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">components/</span>
              <span className="text-muted-foreground">Reusable UI components</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">hooks/</span>
              <span className="text-muted-foreground">Custom React hooks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">lib/</span>
              <span className="text-muted-foreground">Utility functions and shared code</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">public/</span>
              <span className="text-muted-foreground">Static assets like images</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">styles/</span>
              <span className="text-muted-foreground">CSS and styling files</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">Configuration files</span>
              <span className="text-muted-foreground">next.config.mjs, tailwind.config.ts, tsconfig.json, etc.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

