import { SearchHistoryProps } from '@/app/types'

export function SearchHistory({ searchHistory, onSelectedItem }: SearchHistoryProps) {
  let useInnerComponent = <p className='m-2 text-slate-100'>No past search history</p>

  if (searchHistory?.length) {
    useInnerComponent = (
      <ul className='list-outside'>
        {searchHistory.map(item => {
          return (
            <li key={item.id}>
              <div className='flex flex-col items-start p-2 hover:text-sky-600'>
                <h3 onClick={() => onSelectedItem(item.title)} className='text-lg font-bold'>{item.title}</h3>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className='mr-4 w-3/5 border-2 border-white-100 rounded-lg overflow-x-auto'>
      {useInnerComponent}
    </div>
  )
}
