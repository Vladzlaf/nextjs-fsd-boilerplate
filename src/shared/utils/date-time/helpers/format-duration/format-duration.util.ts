import { getMessageWithPluralization } from '@/shared/utils/format-plural-message'

export function formatDuration(duration: number, minim?: boolean) {
  const hrs = ~~(duration / 3600)
  const mins = ~~((duration % 3600) / 60)
  const secs = ~~duration % 60

  const pluralHours = getMessageWithPluralization(hrs, {
    singular: 'hour',
    plural: 'hours',
  })

  const pluralMinutes = getMessageWithPluralization(mins, {
    singular: 'minute',
    plural: 'minutes',
  })

  const pluralSeconds = getMessageWithPluralization(secs, {
    singular: 'second',
    plural: 'seconds',
  })

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = ''

  if (hrs > 0) {
    ret +=
      '' + hrs + `${!minim ? ` ${pluralHours}` : 'h'} ` + (mins < 10 ? '0' : '')
  }

  ret += '' + mins + `${!minim ? ` ${pluralMinutes}` : 'm'} `
  if (secs > 0) {
    ret += '' + secs + `${!minim ? ` ${pluralSeconds}` : 's'} `
  }

  return ret
}
