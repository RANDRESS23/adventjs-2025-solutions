function manufactureGifts(
  giftsToProduce: Array<{ toy: string, quantity: number }>
): string[] {
  return giftsToProduce.filter((gift) => gift.quantity > 0)
    .reduce((acc: string[], gift) => {
      return acc.concat(`${gift.toy},`.repeat(gift.quantity)
        .split(',')
        .filter(gift => gift !== '')
      )
    }, [])
}