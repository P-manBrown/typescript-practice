export {}

// 残余引数(...values)
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters
// reduce
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const reducer = (accumulator: number, currentValue: number): number => {
  console.log({ accumulator, currentValue})
  return accumulator + currentValue
}

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer)
}

console.log(sum(1, 2, 3, 4, 5));
