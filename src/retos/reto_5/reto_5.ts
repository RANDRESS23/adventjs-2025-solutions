type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {
  let fromTimeParsed = fromTime.replaceAll('*', '-')
    .replaceAll('|', ':').replaceAll('@', 'T').replaceAll(' NP', '')
  
  let takeOffTimeParsed = takeOffTime.replaceAll('*', '-')
    .replaceAll('|', ':').replaceAll('@', 'T').replaceAll(' NP', '')
  
  const fromTimeParsedDate = new Date(fromTimeParsed)
  const takeOffTimeParsedDate = new Date(takeOffTimeParsed)
  const diffDate = Math.floor((takeOffTimeParsedDate.getTime() - fromTimeParsedDate.getTime()) / 1000)

  return diffDate
}