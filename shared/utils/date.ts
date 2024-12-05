export function formatTime(dateString: string) {
  const date = new Date(dateString)
  let hours = date.getHours()
  const minutes = date.getMinutes()

  // 12시간제로 변환
  hours = hours % 12
  hours = hours === 0 ? 12 : hours // 0시를 12시로 표시

  if (minutes > 0) {
    return `${hours}시 ${minutes}분`
  }

  return `${hours}시`
}
