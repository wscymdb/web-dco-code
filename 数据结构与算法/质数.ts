function primeNum(num: number) {
  let count = 0
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++
    }
  }

  return count === 2 ? true : false
}

console.log(primeNum(299))
