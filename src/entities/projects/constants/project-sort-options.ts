import { SortOrder } from '@/shared/consts/sort-order.enum'
import { ProjectSortOption } from '../interfaces/project-sort-options.interface'

export enum ProjectSortBy {
  CREATED_AT = 'createdAt',
  TITLE = 'title',
  RATING = 'rateFrom',
  REQUESTING = 'requestsCount',
}
export const PROJECT_SORT_OPTIONS: ProjectSortOption[] = [
  {
    value: 'most-popular',
    label: 'Most popular',
    sortBy: ProjectSortBy.REQUESTING,
    sortOrder: SortOrder.DESC,
  },
  {
    value: 'most-recent',
    label: 'Most recent',
    sortBy: ProjectSortBy.CREATED_AT,
    sortOrder: SortOrder.DESC,
  },
  {
    value: 'highest-rated',
    label: 'Highest rated',
    sortBy: ProjectSortBy.RATING,
    sortOrder: SortOrder.DESC,
  },
  {
    value: 'lowest-rated',
    label: 'Lowest rated',
    sortBy: ProjectSortBy.RATING,
    sortOrder: SortOrder.ASC,
  },
  {
    value: 'title-asc',
    label: 'A-Z',
    sortBy: ProjectSortBy.TITLE,
    sortOrder: SortOrder.ASC,
  },
  {
    value: 'title-desc',
    label: 'Z-A',
    sortBy: ProjectSortBy.TITLE,
    sortOrder: SortOrder.DESC,
  },
]
