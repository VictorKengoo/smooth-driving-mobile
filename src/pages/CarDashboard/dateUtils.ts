export function isToday(date: Date) {
  const today = new Date()
  return date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
}

export function isBefore(date: Date, daysBefore: number) {
  const yesterday = new Date();
  return (
    (yesterday.getDate() - daysBefore) === date.getDate() &&
    yesterday.getFullYear() === date.getFullYear()
  )
}