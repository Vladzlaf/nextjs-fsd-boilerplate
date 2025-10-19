import { Project } from '@/entities/projects/interfaces/project.interface'

export const formatPaymentRate = (project: Project) => {
  if (project.rateFrom && project.rateTo) {
    return `$ ${project.rateFrom}–${project.rateTo}/h`
  } else if (project.rateFrom) {
    return `$ ${project.rateFrom}/h`
  } else if (project.rateTo) {
    return `$ ${project.rateTo}/h`
  }
  return 'Not specified'
}
