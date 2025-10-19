import { DatePeriod } from '../constants'

export function getDatePeriodTitle(period: DatePeriod) {
  switch (period) {
    case DatePeriod.Day:
      return '24H'
    case DatePeriod.Week:
      return '7D'
    case DatePeriod.Fortnight:
      return '14D'
    case DatePeriod.Month:
      return '1M'
    case DatePeriod.QuarterOfYear:
      return '3M'
    case DatePeriod.HalfYear:
      return '6M'
    case DatePeriod.All:
      return 'All'
  }
}
