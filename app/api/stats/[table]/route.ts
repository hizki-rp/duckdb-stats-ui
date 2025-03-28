import { NextResponse } from "next/server"
import { getTableStats } from "@/lib/db"

export async function GET(request: Request, { params }: { params: { table: string } }) {
  try {
    const stats = await getTableStats(params.table)
    return NextResponse.json({ stats })
  } catch (error) {
    console.error(`Error fetching stats for ${params.table}:`, error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

