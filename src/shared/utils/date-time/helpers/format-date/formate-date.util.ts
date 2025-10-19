import { date } from '../../dayjs'

const DEFAULT_DATE_FORMAT = 'MM/DD/YYYY'

export function formatDate(
  dateInput: string,
  format: string = DEFAULT_DATE_FORMAT,
) {
  return date(dateInput).format(format)
}

export function formatDateWithUTC(
  dateInput: string | Date,
  format: string = DEFAULT_DATE_FORMAT,
) {
  return date(dateInput).utc(true).local().format(format)
}
