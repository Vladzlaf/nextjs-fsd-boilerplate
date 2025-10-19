export interface CreateProjectPayload {
  title: string
  requiredExperience: string
  location?: string
  languages: string[]
  rateFrom?: number
  rateTo?: number
  jobDescription: string
  keySkills: string[]
  recruitmentActive: boolean
  seekingCollaboratorsAmount?: number | null
  seekingCollaboratorsDeadline?: Date | null
}
