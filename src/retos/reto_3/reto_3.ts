function drawGift(size: number, symbol: string): string {
  let gift = ''

  if (size < 2) return gift
  
  for (let i = 0; i < size; i++) {
    gift += i === 0 || i === size - 1
      ? symbol.repeat(size)
      : `${symbol}${' '.repeat(size - 2)}${symbol}`
    gift += i !== size - 1 ? '\n' : ''
  }

  return gift
}