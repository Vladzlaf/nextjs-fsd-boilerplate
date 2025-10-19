import { Owner } from '@/shared/api/interfaces/owner.interface'
import { ProjectStatus } from '../constants/project-statuses.enum'
import { Experience } from '../constants/experience-options.enum'

export interface ProjectResponse {
  id: string
  title: string
  requiredExperience: Experience
  location?: string
  languages: string[]
  rateFrom?: number
  rateTo?: number
  jobDescription: string
  keySkills: string[]
  status: ProjectStatus
  recruitmentActive: boolean
  createdAt: string
  updatedAt: string
  owner: Owner
  seekingCollaboratorsAmount?: number | null
  seekingCollaboratorsDeadline?: Date | null
  requestsCount?: number | null
  collaboratorsCount?: number | null
}
