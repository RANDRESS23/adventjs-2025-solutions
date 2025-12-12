function decodeSantaPin(code: string): string | null {
  const codes = code.split('][')
  let pin = ''
  
  if (codes.length < 4) return null

  const sumRegex = /\+/g
  const restRegex = /\-/g
  let prevCode = 0

  codes.forEach(code => {
    code = code[0] === '[' ? code.substring(1) : code
    
    if (code[0] === '<') pin += `${prevCode}`
    else {
      const digit = code.match(sumRegex)?.length ?? code.match(restRegex)?.length
      let codeParsed = Number(code[0])
      let codeFinal = code.match(sumRegex) !== null && digit !== undefined
        ? codeParsed = (codeParsed + digit) % 10
        : code.match(restRegex) !== null && digit !== undefined
          ? codeParsed = (codeParsed - digit + 10) % 10
          : codeParsed

      pin += `${codeFinal}`
      prevCode = codeFinal
    }
  })

  return pin
}