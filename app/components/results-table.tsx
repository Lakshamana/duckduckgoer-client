import { ResultsTableProps } from '@/app/types'

export function ResultsTable({ data, firstSearch, loading }: ResultsTableProps) {
  if (loading) {
    return (
      <section className='w-full overflow-x-hidden overflow-y-auto my-2 bg-slate-300 rounded-lg'>
        <div className='flex flex-row items-center justify-between p-4 border-b border-zinc-300'>
          <div className='flex flex-col items-start'>
            <h3 className='text-lg font-bold'> Loading... </h3>
          </div>
        </div>
      </section>
    )
  }

  if (!data.length) {
    return (
      <section className='w-full overflow-x-hidden overflow-y-auto my-2 bg-slate-300 rounded-lg'>
        <div className='flex flex-row items-center justify-between p-4 border-b border-zinc-300'>
          <div className='flex flex-col items-start'>
            <h3 className='text-lg font-bold'>
              {firstSearch ? 'Try searching for something...' : 'No results found for that search'}
            </h3>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className='ml-auto overflow-x-hidden overflow-y-auto my-2 bg-slate-300 rounded-lg'>
      {data.map(item => {
        return (
          <div
            key={item.id}
            className='flex flex-row items-center justify-between p-4 border-b border-zinc-300'
          >
            <div className='flex flex-col items-start'>
              <h3 className='text-lg font-bold'>{item.title}</h3>
              <p className='text-sm text-zinc-500'>{item.url}</p>
            </div>
            <div>
              <a
                href={item.url}
                target='_blank'
                rel='noreferrer'
                className='text-sm hover:text-blue-500'
              >
                <span className='icon-open-link'></span>
              </a>
            </div>
          </div>
        )
      })}
    </section>
  )
}
