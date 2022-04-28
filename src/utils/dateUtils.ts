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

export default {
  isToday,
  isBefore,
  sortByDate,
}