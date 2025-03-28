import { NextResponse } from "next/server"
import { getDB } from "@/lib/db"

// This endpoint initializes the database
export async function GET() {
  try {
    await getDB()
    return NextResponse.json({ success: true, message: "Database initialized successfully" })
  } catch (error) {
    console.error("Error initializing database:", error)
    return NextResponse.json(
      { success: false, message: "Failed to initialize database", error: String(error) },
      { status: 500 },
    )
  }
}

