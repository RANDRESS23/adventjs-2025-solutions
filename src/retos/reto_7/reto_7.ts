function drawTree(height: number, ornament: string, frequency: number): string {
  let tree = ''
  let acc = 0

  for (let i = 0; i < height; i++) {
    let row = ''
    
    for (let j = 0; j < i * 2 + 1; j++) {
      acc += 1
      let symbol = '*'
      
      if (acc === frequency) {
        acc = 0
        symbol = ornament
      }
      
      row += symbol 
    }
    
    tree += `${' '.repeat(height - (i + 1))}${row}\n`
  }
  
  tree += `${' '.repeat(height - 1)}#`

  return tree
}