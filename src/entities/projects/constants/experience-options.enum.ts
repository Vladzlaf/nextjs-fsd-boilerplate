export enum Experience {
  NO_EXPERIENCE = '0',
  ONE_YEAR = '1',
  TWO_YEARS = '2',
  THREE_YEARS = '3',
  FOUR_YEARS = '4',
  FIVE_YEARS = '5',
  SIX_TO_TEN = '6-10',
  TEN_PLUS = '10+',
}

export const EXPERIENCE_OPTIONS = [
  { value: Experience.NO_EXPERIENCE, label: 'No experience' },
  { value: Experience.ONE_YEAR, label: '1 year' },
  { value: Experience.TWO_YEARS, label: '2 years' },
  { value: Experience.THREE_YEARS, label: '3 years' },
  { value: Experience.FOUR_YEARS, label: '4 years' },
  { value: Experience.FIVE_YEARS, label: '5 years' },
  { value: Experience.SIX_TO_TEN, label: '6-10 years' },
  { value: Experience.TEN_PLUS, label: '10+ years' },
] as const

export const getExperienceLabel = (value: Experience): string => {
  return EXPERIENCE_OPTIONS.find((opt) => opt.value === value)?.label || value
}
