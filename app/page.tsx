'use client'

import React from 'react'
import { ResultsTable } from '@/app/components'
import { retrieveData } from './services/retrieve-data'

export default function Home() {
  const [search, setSearch] = React.useState('')
  const [firstSearch, setFirstSearch] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState([])

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    setLoading(true)
    setFirstSearch(false)

    // Fetch data from the API
    const response = await retrieveData(search)

    setData(response)
    setLoading(false)
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-full flex flex-col max-w-5xl items-stretch justify-center font-mono text-sm lg:flex'>
        <div className='w-full mb-2'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='search'></label>
            <input
              placeholder='Search duckduckgo.com...'
              type='text'
              id='search'
              name='search'
              onChange={(e) => setSearch(e.target.value)}
              className='my-2 block w-full rounded-lg focus:ring-0 sm:text-sm border-zinc-300 p-2'
            />
            <button className="hidden" type="submit"></button>
          </form>
        </div>
        <div className='flex'>
          <div className='flex mr-1 w-1/3' style={{ border: '1px solid red' }}>
            hola
          </div>
          <ResultsTable data={data} firstSearch={firstSearch} loading={loading}></ResultsTable>
        </div>
      </div>
    </main>
  )
}
