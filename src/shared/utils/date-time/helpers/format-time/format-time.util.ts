import { date } from '../../dayjs'

export const formatTime = (time: string, format: string = 'hh:mm A') => {
  return date(time).utc(true).local().format(format)
}
