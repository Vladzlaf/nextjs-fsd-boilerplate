import { date } from '../../dayjs'

export function formatDateWithMonth(dateInput: string) {
  const formatedDate = date(dateInput)

  return formatedDate.format('DD MMMM YYYY')
}
