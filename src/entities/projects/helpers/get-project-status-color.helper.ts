import { ProjectStatus } from '../constants/project-statuses.enum'

export const getProjectStatusColor = (status: ProjectStatus): string => {
  switch (status) {
    case ProjectStatus.ACTIVE:
      return 'bg-orange-system-opacity text-orange-system'
    case ProjectStatus.RECRUITING:
      return 'bg-accent-opacity text-text-accent'
    case ProjectStatus.FINISHED:
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}
