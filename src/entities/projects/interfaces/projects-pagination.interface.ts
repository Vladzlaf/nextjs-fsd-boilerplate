import { ProjectResponse } from './project-response.interface'

export interface ProjectsPagination {
  data: ProjectResponse[]
  total: number
  page: number
  limit: number
  totalPages: number
}
