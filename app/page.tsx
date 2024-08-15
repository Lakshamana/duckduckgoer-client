'use client'

import React, { useRef, useState } from 'react'
import { ResultsTable } from '@/app/components'
import { retrieveData } from './services/retrieve-data'
import { SearchHistory } from './components/search-history'

export default function Home() {
  const searchRef = useRef<HTMLInputElement | null>(null)
  const [search, setSearch] = useState('')
  const [firstSearch, setFirstSearch] = useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [searchHistory, setSearchHistory] = useState([] as any[])

  async function searchItem(search: string) {
    setLoading(true)
    setFirstSearch(false)

    const response = await retrieveData(search)

    setData(response)
    setLoading(false)

    console.log(search)
    setSearchHistory([
      { id: `id-${Date.now()}`, title: search, url: '#' },
      ...searchHistory.filter(item => item.title !== search),
    ])

    setSearch('')

    if (searchRef?.current) {
      searchRef.current.focus()
      searchRef.current.value = search
    }
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    searchItem(search)
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-full flex flex-col max-w-5xl items-stretch justify-center font-mono text-sm lg:flex'>
        <div className='w-full mb-2'>
          <form onSubmit={handleSubmit} action="post">
            <label htmlFor='search'></label>
            <input
              placeholder='Search duckduckgo.com...'
              type='text'
              id='search'
              name='search'
              ref={searchRef}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className='my-2 block w-full rounded-lg focus:ring-0 sm:text-sm border-zinc-300 p-2'
            />
            <button className='hidden' type='submit'></button>
          </form>
        </div>
        <div className='flex items-start'>
          <SearchHistory searchHistory={searchHistory} onSelectedItem={searchItem}></SearchHistory>
          <ResultsTable data={data} firstSearch={firstSearch} loading={loading}></ResultsTable>
        </div>
      </div>
    </main>
  )
}
