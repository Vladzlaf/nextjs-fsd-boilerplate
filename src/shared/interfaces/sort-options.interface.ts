import { SortOrder } from '../consts/sort-order.enum'

export interface SortOptions<T extends string = string> {
  sortBy?: T
  sortOrder?: SortOrder
}

export interface SortOption<T extends string = string> {
  value: T
  label: string
}

export const SORT_ORDER_OPTIONS: SortOption<SortOrder>[] = [
  { value: SortOrder.ASC, label: 'A-Z' },
  { value: SortOrder.DESC, label: 'Z-A' },
]
