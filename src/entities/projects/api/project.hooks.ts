import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { customToast } from '@/shared/hooks/use-custom-toast'
import { AxiosError } from 'axios'
import { projectApi } from './project.api'
import { CreateProjectPayload } from '../interfaces/project-create-payload.interface'
import { ProjectsFilter } from '../interfaces/projects-filter.interface'
import { UpdateProjectPayload } from '../interfaces/project-update-payload.interface'
import { ProjectResponse } from '../interfaces/project-response.interface'
import { SortOrder } from '@/shared/consts/sort-order.enum'
import { ProjectSortBy } from '../constants/project-sort-options'

export const useCreateProject = () => {
  return useMutation({
    mutationFn: (payload: CreateProjectPayload) =>
      projectApi.createProject(payload),
    onSuccess: (data: ProjectResponse) => {
      customToast.success('Project created successfully')
      return data
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error.response?.data?.message || 'Failed to create project'
      customToast.error(errorMessage)
    },
  })
}

export const useGetPaginatedProjects = (
  page: number = 1,
  limit: number = 10,
  filters?: ProjectsFilter,
  sortBy?: ProjectSortBy,
  sortOrder?: SortOrder,
) => {
  return useQuery({
    queryKey: ['projects', page, limit, filters, sortBy, sortOrder],
    queryFn: () =>
      projectApi.getPaginatedProjects(page, limit, filters, sortBy, sortOrder),
  })
}

export const useGetAllProjects = () => {
  return useQuery({
    queryKey: ['allProjects'],
    queryFn: () => projectApi.getAllProjects(),
  })
}

export const useGetMyProjectsPaginated = (
  page: number = 1,
  limit: number = 10,
  filters?: ProjectsFilter,
  sortBy?: ProjectSortBy,
  sortOrder?: SortOrder,
) => {
  return useQuery({
    queryKey: ['myProjectsPaginated', page, limit, filters, sortBy, sortOrder],
    queryFn: () =>
      projectApi.getMyProjectsPaginated(
        page,
        limit,
        filters,
        sortBy,
        sortOrder,
      ),
  })
}

export const useGetProjectById = (id: string) => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: () => projectApi.getProjectById(id),
    enabled: !!id,
  })
}

export const useUpdateProject = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string
      payload: UpdateProjectPayload
    }) => projectApi.updateProject(id, payload),
    onSuccess: (data: ProjectResponse) => {
      customToast.success('Project updated successfully')
      queryClient.invalidateQueries({ queryKey: ['myProjectsPaginated'] })
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      queryClient.invalidateQueries({ queryKey: ['project', data.id] })
      return data
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error.response?.data?.message || 'Failed to update project'
      customToast.error(errorMessage)
    },
  })
}

export const useDeleteProject = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => projectApi.deleteProject(id),
    onSuccess: () => {
      customToast.success('Project deleted successfully')
      queryClient.invalidateQueries({ queryKey: ['myProjectsPaginated'] })
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error.response?.data?.message || 'Failed to delete project'
      customToast.error(errorMessage)
    },
  })
}

export const useToggleProjectRecruitment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => projectApi.toggleProjectRecruitment(id),
    onSuccess: (data: ProjectResponse) => {
      queryClient.invalidateQueries({ queryKey: ['myProjectsPaginated'] })
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      queryClient.invalidateQueries({ queryKey: ['project', data.id] })
      return data
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error.response?.data?.message || 'Failed to update recruitment status'
      console.error(errorMessage)
    },
  })
}

export const useStartProject = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => projectApi.startProject(id),
    onSuccess: (data: ProjectResponse) => {
      customToast.success('Project started successfully')
      queryClient.invalidateQueries({ queryKey: ['myProjectsPaginated'] })
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      queryClient.invalidateQueries({ queryKey: ['project', data.id] })
      queryClient.invalidateQueries({ queryKey: ['allProjects'] })
      return data
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error.response?.data?.message || 'Failed to start project'
      customToast.error(errorMessage)
    },
  })
}

export const useFinishProject = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => projectApi.finishProject(id),
    onSuccess: (data: ProjectResponse) => {
      customToast.success('Project finished successfully')
      queryClient.invalidateQueries({ queryKey: ['myProjectsPaginated'] })
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      queryClient.invalidateQueries({ queryKey: ['project', data.id] })
      queryClient.invalidateQueries({ queryKey: ['allProjects'] })
      return data
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error.response?.data?.message || 'Failed to finish project'
      customToast.error(errorMessage)
    },
  })
}
