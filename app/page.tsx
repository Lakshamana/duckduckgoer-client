'use client'

import React, { useState } from 'react'
import { ResultsTable } from '@/app/components'
import { retrieveData } from './services/retrieve-data'
import { SearchHistory } from './components/search-history'
import Image from 'next/image'

export default function Home() {
  const [search, setSearch] = useState('')
  const [firstSearch, setFirstSearch] = useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [searchHistory, setSearchHistory] = useState([] as any[])

  async function searchItem(search: string) {
    if (search === '') return

    setLoading(true)
    setFirstSearch(false)

    const response = await retrieveData(search)

    setData(response)
    setLoading(false)

    setSearchHistory([
      { id: `id-${Date.now()}`, title: search, url: '#' },
      ...searchHistory.filter(item => item.title !== search),
    ])

    setSearch(search)
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    searchItem(search)
  }

  return (
    <div className='w-full flex flex-col lg:h-56 sm:h-6'>
      <nav className='flex lg:h-dvh md:h-1/6 sm:h-24 lg:my-16 m-4 md:m-8'>
        <span className='inline-flex mx-auto items-center'>
          <Image width={32} height={32} alt='' src='/duck.svg' className='mr-2' />
          <span className='lg:text-3xl text-base'>
            DuckDuckGoer
          </span>
        </span>
      </nav>
      <main className='flex flex-col items-center justify-between lg:px-24 lg:pb-24 md:px-12 px-4'>
        <div className='w-full flex flex-col max-w-5xl items-stretch justify-center font-mono text-sm lg:flex'>
          <div className='w-full mb-2'>
            <form onSubmit={handleSubmit} action='post'>
              <label htmlFor='search'></label>
              <input
                placeholder='Search duckduckgo.com...'
                type='text'
                id='search'
                name='search'
                onFocus={_ => setSearch('')}
                value={search}
                onChange={e => setSearch(e.target.value)}
                className='my-2 block w-full rounded-lg focus:ring-0 text-black outline-none border-zinc-300 p-2'
              />
              <button className='hidden' type='submit'></button>
            </form>
          </div>
          <div className='flex items-stretch'>
            <SearchHistory
              searchHistory={searchHistory}
              onSelectedItem={searchItem}
            ></SearchHistory>
            <ResultsTable data={data} firstSearch={firstSearch} loading={loading}></ResultsTable>
          </div>
        </div>
      </main>
    </div>
  )
}
