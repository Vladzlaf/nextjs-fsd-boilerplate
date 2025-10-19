import { Duration } from 'dayjs/plugin/duration'

import { DatePeriod } from '../constants'
import { date } from '../dayjs'

export interface DateRange {
  start: Date
  end: Date
}

export interface Period {
  title: DatePeriod
  duration: Duration
}

export class DatePeriodParser {
  private readonly periodsConfigMap: Map<DatePeriod, Period>

  constructor() {
    this.periodsConfigMap = new Map<DatePeriod, Period>([
      [
        DatePeriod.Day,
        {
          title: DatePeriod.Day,
          duration: date.duration({ hours: 23, minutes: 59, seconds: 59 }),
        },
      ],
      [
        DatePeriod.Week,
        { title: DatePeriod.Week, duration: date.duration({ days: 6 }) },
      ],
      [
        DatePeriod.Fortnight,
        { title: DatePeriod.Fortnight, duration: date.duration({ days: 13 }) },
      ],
      [
        DatePeriod.Month,
        { title: DatePeriod.Month, duration: date.duration({ months: 1 }) },
      ],
      [
        DatePeriod.QuarterOfYear,
        {
          title: DatePeriod.QuarterOfYear,
          duration: date.duration({ months: 3 }),
        },
      ],
      [
        DatePeriod.HalfYear,
        { title: DatePeriod.HalfYear, duration: date.duration({ months: 6 }) },
      ],
      [
        DatePeriod.All,
        {
          title: DatePeriod.All,
          duration: date.duration({ months: Infinity }),
        },
      ],
    ])
  }

  public getRangeByPeriod(DatePeriod: DatePeriod): DateRange {
    const { duration } = this.periodsConfigMap.get(DatePeriod)!
    const end = date().endOf('day').utc().toDate()

    return {
      start: date(end).subtract(duration).toDate(),
      end,
    }
  }
}
