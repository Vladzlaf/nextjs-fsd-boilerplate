import { ProjectStatus } from '../constants/project-statuses.enum'
import { SortOrder } from '@/shared/consts/sort-order.enum'
import { ProjectSortBy } from '../constants/project-sort-options'
import { StatusFilter } from './status-filter-interface'

export interface ProjectsFilter {
  title?: string
  requiredExperience?: string
  location?: string
  languages?: string[]
  minRate?: number
  maxRate?: number
  keySkills?: string[]
  status?: ProjectStatus | StatusFilter
  recruitmentActive?: boolean
  minSeekingCollaboratorsAmount?: number
  maxSeekingCollaboratorsAmount?: number
  seekingCollaboratorsDeadline?: Date
  excludeOwn?: boolean
  sortBy?: ProjectSortBy
  sortOrder?: SortOrder
}
