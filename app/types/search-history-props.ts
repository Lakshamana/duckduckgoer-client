import { SearchHistoryItem } from './search-history-item'

export type SearchHistoryProps = {
  searchHistory: SearchHistoryItem[]
  onSelectedItem: (item: string) => void
}
