/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs, { ConfigType, Dayjs } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import durationPlugin from 'dayjs/plugin/duration'
import isBetween from 'dayjs/plugin/isBetween'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import isoWeek from 'dayjs/plugin/isoWeek'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import relativeTimePlugin from 'dayjs/plugin/relativeTime'
import timezonePlugin from 'dayjs/plugin/timezone'
import timezone from 'dayjs/plugin/timezone'
import utcPlugin from 'dayjs/plugin/utc'
import utc from 'dayjs/plugin/utc'
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(isoWeek)
dayjs.extend(durationPlugin)
dayjs.extend(relativeTimePlugin)
dayjs.extend(utcPlugin)
dayjs.extend(timezonePlugin)
dayjs.extend(isBetween)
dayjs.extend(weekday)
dayjs.extend(customParseFormat)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isLeapYear)

export const getClientTimeZone = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

// NOTE: nodejs automatically tracks TZ
// so the value of TIMEZONE affects NOTHING and everything configured under the hood

// FIXME: fix proxy type coz some conditions is missing
const handler: ProxyHandler<any> = {
  apply: function (target, _, [input]: [ConfigType | undefined]) {
    const clientTimeZone = getClientTimeZone()
    // NOTE: dayjs objects created within app may include LOCAL timezone (for example created with antd pickers)
    // such date-times should be treated as env-timezone without offset conversion (22:00+03 -> 22:00+00)
    if (dayjs.isDayjs(input)) {
      return input
    }

    // NOTE: other date-values (numbers, string and dates) considered UTC-like and converted using offset transformations (22:00+03 -> 19:00+00)
    return target.tz(input, clientTimeZone)
  },
}

// FIXME: fix this

const dayjsProxy = new Proxy(dayjs, handler)

export type DateValue = Dayjs

export const date = dayjsProxy
