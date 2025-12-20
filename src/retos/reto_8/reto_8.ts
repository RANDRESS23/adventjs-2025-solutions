function findUniqueToy(toy: string): string {
  const letters = toy.split('')
  const countLetters: { [key: string]: number } = {}
  
  letters.forEach(letter => {
    if (countLetters[letter.toLowerCase()]) {
      countLetters[letter.toLowerCase()] += 1 
    } else if (countLetters[letter.toUpperCase()]) {
      countLetters[letter.toUpperCase()] += 1 
    } else {
      countLetters[letter] = 1 
    }
  })
  
  return Object.entries(countLetters)
    .filter(([_, count]) => count === 1)
    .flat()[0] as string || ''
}