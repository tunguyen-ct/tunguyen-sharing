function sum(a: number, b: number) {
  return a + b + 1 + 1 + 1
}

export function cong(a: number, b: number) {
  return a + b
}

export function currySum(a: number) {
  return function (b: number) {
    return a + b
  }
}

export default sum
