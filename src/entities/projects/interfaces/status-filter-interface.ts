import { ProjectStatus } from '../constants/project-statuses.enum'

export interface StatusFilter {
  equals?: ProjectStatus
  not?: ProjectStatus
  in?: ProjectStatus[]
  notIn?: ProjectStatus[]
}
