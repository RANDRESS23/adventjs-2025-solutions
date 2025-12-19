type Glove = { hand: 'L' | 'R'; color: string; use?: boolean; attempts?: number }

function matchGloves(gloves: Glove[]): string[] {
  let matchGlovesFound: { color: string; attempts: number }[] = []

  for (let i = 0; i < gloves.length; i++) {
    const handPair = gloves[i].hand === 'L' ? 'R' : 'L'
    let attempts = 0

    for (let j = i + 1; j < gloves.length; j++) {
      const isUsePair = gloves[i]?.use || gloves[j]?.use
      attempts += 1

      if (gloves[j].hand === handPair 
        && gloves[j].color === gloves[i].color
        && !isUsePair) {
          gloves[i] = { ...gloves[i], use: true } 
          gloves[j] = { ...gloves[i], use: true } 
          matchGlovesFound = [
            ...matchGlovesFound, 
            { color: gloves[j].color, attempts }
          ]
          break
      }
    }  
  }

  return matchGlovesFound.sort((a, b) => a.attempts - b.attempts)
    .map(glove => glove.color)
}