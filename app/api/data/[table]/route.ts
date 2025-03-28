import { NextResponse } from "next/server"
import { getTableData } from "@/lib/db"

export async function GET(request: Request, { params }: { params: { table: string } }) {
  const { searchParams } = new URL(request.url)
  const limit = Number.parseInt(searchParams.get("limit") || "100")
  const offset = Number.parseInt(searchParams.get("offset") || "0")

  try {
    const data = await getTableData(params.table, limit, offset)
    return NextResponse.json({ data })
  } catch (error) {
    console.error(`Error fetching data from ${params.table}:`, error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

