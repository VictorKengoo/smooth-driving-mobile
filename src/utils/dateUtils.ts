import moment from 'moment'

function isToday(date: Date) {
  return moment().diff(date, 'day') === 0
}

function isBefore(date: Date, daysBefore: number) {
  const today = moment()
  const parsedDate = moment(date)

  return parsedDate.isAfter(today.subtract(daysBefore, 'day'))
}

function sortByDate(list: any[], ordem: string) {
  list.sort((a, b) =>
    (a.dateTime > b.dateTime) ? 1 : ((b.dateTime > a.dateTime) ? -1 : 0)
  );

  if (ordem === 'Mais antigos') {
    return list
  } else {
    return list.reverse()
  }
}

function subtractDates(dateStart: Date, dateEnd: Date) {

  const duration = moment.duration(moment(dateEnd).diff(dateStart, 'milliseconds'))
  console.log("Duration: ", duration)
  return `${duration.hours()}h:${duration.minutes()}m:${duration.seconds()}s`
  // return moment(dateEnd).diff(dateStart, 'minutes')
}

export default {
  isToday,
  isBefore,
  sortByDate,
  subtractDates
}