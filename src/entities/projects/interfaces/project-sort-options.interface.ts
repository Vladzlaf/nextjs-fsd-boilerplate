import { SortOrder } from '@/shared/consts/sort-order.enum'
import { ProjectSortBy } from '../constants/project-sort-options'

export interface ProjectSortOption {
  value: string
  label: string
  sortBy: ProjectSortBy
  sortOrder: SortOrder
}
