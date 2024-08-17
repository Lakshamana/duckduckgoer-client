import { SearchHistoryResponse, SearchRequest, SearchResponse } from '@/app/types'

export async function retrieveSearchResults({
  q,
  page = 1,
  perPage = 10,
}: SearchRequest): Promise<SearchResponse> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  if (!apiUrl) throw new Error('API_URL not set')

  const query = new URLSearchParams({
    q,
    page: String(page),
    perPage: String(perPage),
  })

  let response
  try {
    response = await fetch(`${apiUrl}/search?${query}`, { method: 'get' }).then(res => res.json())
  } catch (error) {
    throw new Error('Error retrieving search term results')
  }

  return response
}

export async function retrieveSearchHistory(): Promise<SearchHistoryResponse> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  if (!apiUrl) throw new Error('API_URL not set')

  let response
  try {
    response = await fetch(`${apiUrl}/search-history`, { method: 'get' }).then(res => res.json())
  } catch (error) {
    throw new Error('Error retrieving search history')
  }

  return response
}
