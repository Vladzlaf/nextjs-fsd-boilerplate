import { ProjectStatus } from '../constants/project-statuses.enum'

export const getProjectStatusLabel = (status: ProjectStatus): string => {
  switch (status) {
    case ProjectStatus.ACTIVE:
      return 'In Progress'
    case ProjectStatus.RECRUITING:
      return 'Seeking Collaborators'
    case ProjectStatus.FINISHED:
      return 'Finished'
    default:
      return status
  }
}
