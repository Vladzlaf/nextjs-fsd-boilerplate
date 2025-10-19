import { ProjectFormValues } from '../interfaces/form-values.interface'
import { Project } from '@/entities/projects/interfaces/project.interface'

export const getInitialValues = (project?: Project): ProjectFormValues => ({
  title: project?.title || '',
  requiredExperience: project?.requiredExperience || '',
  location: project?.location || '',
  languages: project?.languages || [],
  rateFrom: project?.rateFrom || undefined,
  rateTo: project?.rateTo || undefined,
  exactRate: project?.rateTo === null || false,
  jobDescription: project?.jobDescription || '',
  keySkills: project?.keySkills || [],
  recruitmentActive: project?.recruitmentActive ?? true,
  seekingCollaboratorsAmount: project?.seekingCollaboratorsAmount || 1,
  noSpecificNumber: project?.seekingCollaboratorsAmount === null || false,
  seekingCollaboratorsDeadline: project?.seekingCollaboratorsDeadline || null,
  noDeadline: project?.seekingCollaboratorsDeadline === null || false,
})
