export async function fetchTableData(tableName: string, limit = 100, offset = 0) {
  try {
    const response = await fetch(`/api/data/${tableName}?limit=${limit}&offset=${offset}`)

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || `Failed to fetch data for ${tableName}`)
    }

    const data = await response.json()
    return data.data
  } catch (error) {
    console.error(`Error fetching data for ${tableName}:`, error)
    throw error
  }
}

export async function fetchTableStats(tableName: string) {
  try {
    const response = await fetch(`/api/stats/${tableName}`)

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || `Failed to fetch stats for ${tableName}`)
    }

    const data = await response.json()
    return data.stats
  } catch (error) {
    console.error(`Error fetching stats for ${tableName}:`, error)
    throw error
  }
}

