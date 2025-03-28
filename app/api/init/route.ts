import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/db-server"

// This endpoint initializes the database
export async function GET() {
  try {
    // Just calling getDatabase will trigger initialization if needed
    getDatabase()
    return NextResponse.json({ success: true, message: "Database initialization started" })
  } catch (error) {
    console.error("Error initializing database:", error)
    return NextResponse.json(
      { success: false, message: "Failed to initialize database", error: String(error) },
      { status: 500 },
    )
  }
}

