import Link from "next/link"
import { Database } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link href="/" className="flex items-center gap-2">
        <Database className="h-6 w-6" />
        <span className="font-bold">DuckDB Stats UI</span>
      </Link>
      <nav className="flex gap-6">
        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
          Dashboard
        </Link>
        <Link
          href="/queries"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Queries
        </Link>
        <Link href="/tables" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Tables
        </Link>
        <Link
          href="/settings"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Settings
        </Link>
      </nav>
    </div>
  )
}

