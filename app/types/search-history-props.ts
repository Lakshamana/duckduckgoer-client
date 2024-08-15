import { SearchItem } from './search-item'

export type SearchHistoryProps = {
  searchHistory: SearchItem[]
  onSelectedItem: (item: string) => void
}
