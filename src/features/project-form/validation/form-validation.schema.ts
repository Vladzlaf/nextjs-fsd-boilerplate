import * as Yup from 'yup'
import { ProjectFormValues } from '../interfaces/form-values.interface'

export const validationSchema = Yup.object<ProjectFormValues>().shape({
  title: Yup.string().required('Project title is required'),
  requiredExperience: Yup.string().required('Required experience is required'),
  location: Yup.string().required('Location is required'),
  languages: Yup.array()
    .of(Yup.string().required('Language is required'))
    .min(1, 'At least one language is required'),

  rateFrom: Yup.number()
    .typeError('Must be a number')
    .positive('Must be positive')
    .transform((value, originalValue) => {
      return originalValue === '' ? null : value
    })
    .required('Rate from is required')
    .when('exactRate', {
      is: true,
      then: (schema) =>
        schema.required('Rate is required when exact rate is selected'),
      otherwise: (schema) => schema,
    }),

  rateTo: Yup.number()
    .typeError('Must be a number')
    .positive('Must be positive')
    .transform((value, originalValue) => {
      return originalValue === '' ? null : value
    })
    .required('Rate is required')
    .when('exactRate', {
      is: true,
      then: (schema) => schema.notRequired(),
      otherwise: (schema) =>
        schema
          .moreThan(Yup.ref('rateFrom'), 'Must be greater than "From" rate')
          .required('Rate to is required'),
    }),
  exactRate: Yup.boolean(),
  jobDescription: Yup.string().required('Job description is required'),
  keySkills: Yup.array()
    .of(Yup.string().required('Skill is required'))
    .min(1, 'At least one key skill is required'),
  inProgress: Yup.boolean(),

  seekingCollaboratorsAmount: Yup.number()
    .nullable()
    .when('noSpecificNumber', {
      is: true,
      then: (schema) => schema.notRequired(),
      otherwise: (schema) =>
        schema
          .typeError('Must be a number')
          .positive('Must be positive')
          .required('Number of collaborators is required'),
    }),

  noSpecificNumber: Yup.boolean(),

  seekingCollaboratorsDeadline: Yup.date()
    .nullable()
    .when('noDeadline', {
      is: true,
      then: (schema) => schema.notRequired(),
      otherwise: (schema) =>
        schema
          .min(new Date(), 'Deadline must be in the future')
          .required('Deadline is required'),
    }),

  noDeadline: Yup.boolean(),
})
