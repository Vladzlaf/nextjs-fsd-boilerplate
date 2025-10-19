import { ProjectStatus } from '@/entities/projects/constants/project-statuses.enum'

export interface ProjectFormValues {
  title: string
  requiredExperience: string
  location?: string
  languages: string[]
  rateFrom?: number
  rateTo?: number
  exactRate: boolean
  jobDescription: string
  keySkills: string[]
  recruitmentActive: boolean
  seekingCollaboratorsAmount?: number | null
  noSpecificNumber: boolean
  seekingCollaboratorsDeadline?: Date | null
  noDeadline: boolean
  status?: ProjectStatus
}
