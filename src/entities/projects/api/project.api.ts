import { AbstractApi } from '@/shared/api/client/abstract.api'
import { ApiBaseResponse } from '@/shared/api/client/types/api-types'
import { CreateProjectPayload } from '../interfaces/project-create-payload.interface'
import { ProjectResponse } from '../interfaces/project-response.interface'
import { UpdateProjectPayload } from '../interfaces/project-update-payload.interface'
import { ProjectsFilter } from '../interfaces/projects-filter.interface'
import { ProjectsPagination } from '../interfaces/projects-pagination.interface'
import { SortOrder } from '@/shared/consts/sort-order.enum'
import { ProjectSortBy } from '../constants/project-sort-options'
import { buildQueryParams } from '@/shared/utils/query-params'

class ProjectApi extends AbstractApi {
  constructor(baseUrl: string) {
    super(baseUrl)
  }

  public async createProject(
    payload: CreateProjectPayload,
  ): Promise<ProjectResponse> {
    const { data } = await this.http.post<ProjectResponse>(
      this.baseUrl,
      payload,
    )
    return data
  }

  public async getPaginatedProjects(
    page: number = 1,
    limit: number = 10,
    filters?: ProjectsFilter,
    sortBy?: ProjectSortBy,
    sortOrder?: SortOrder,
  ): Promise<ProjectsPagination> {
    const { excludeOwn, ...otherFilters } = filters || {}

    const params = {
      page,
      limit,
      ...otherFilters,
      ...(sortBy && { sortBy }),
      ...(sortOrder && { sortOrder }),
      ...(excludeOwn !== undefined && { excludeOwn }),
    }

    const { data } = await this.http.get<ProjectsPagination>(this.baseUrl, {
      params,
    })
    return data
  }

  public async getAllProjects(): Promise<ProjectResponse[]> {
    const { data } = await this.http.get<ProjectResponse[]>(
      this.baseUrl.concat('/all'),
    )
    return data
  }

  public async getMyProjectsPaginated(
    page: number = 1,
    limit: number = 10,
    filters?: ProjectsFilter,
    sortBy?: ProjectSortBy,
    sortOrder?: SortOrder,
  ): Promise<ProjectsPagination> {
    const baseParams = {
      page,
      limit,
      ...filters,
      ...(sortBy && { sortBy }),
      ...(sortOrder && { sortOrder }),
    }

    const params = buildQueryParams(baseParams)

    const { data } = await this.http.get<ProjectsPagination>(
      this.baseUrl.concat('/me'),
      { params },
    )
    return data
  }

  public async getProjectById(id: string): Promise<ProjectResponse> {
    const { data } = await this.http.get<ProjectResponse>(
      `${this.baseUrl}/${id}`,
    )
    return data
  }

  public async updateProject(
    id: string,
    payload: UpdateProjectPayload,
  ): Promise<ProjectResponse> {
    const { data } = await this.http.put<ProjectResponse>(
      `${this.baseUrl}/${id}`,
      payload,
    )
    return data
  }

  public async deleteProject(id: string): Promise<ApiBaseResponse> {
    const { data } = await this.http.delete<ApiBaseResponse>(
      `${this.baseUrl}/${id}`,
    )
    return data
  }

  public async toggleProjectRecruitment(id: string): Promise<ProjectResponse> {
    const { data } = await this.http.put<ProjectResponse>(
      `${this.baseUrl}/${id}/recruitment/toggle`,
    )
    return data
  }

  public async startProject(id: string): Promise<ProjectResponse> {
    const { data } = await this.http.put<ProjectResponse>(
      `${this.baseUrl}/${id}/start`,
    )
    return data
  }

  public async finishProject(id: string): Promise<ProjectResponse> {
    const { data } = await this.http.put<ProjectResponse>(
      `${this.baseUrl}/${id}/finish`,
    )
    return data
  }
}

export const projectApi = new ProjectApi('/projects')
