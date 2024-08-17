import { SearchHistoryResponse, SearchResponse } from '@/app/types'

export async function retrieveSearchResults(q: string): Promise<SearchResponse> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  if (!apiUrl) throw new Error('API_URL not set')

  const query = new URLSearchParams({ q })

  let data
  try {
    const response = await fetch(`${apiUrl}/search?${query}`)
    data = await response.json()
  } catch (error) {
    throw new Error('Error retrieving search results')
  }


  return data
}

export async function retrieveSearchHistory(): Promise<SearchHistoryResponse> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  if (!apiUrl) throw new Error('API_URL not set')

  let data
  try {
    const response = await fetch(`${apiUrl}/search-history`)
    data = await response.json()
  } catch (error) {
    throw new Error('Error retrieving search history')
  }

  return data
}
