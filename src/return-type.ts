export {}

function add(a: number, b: number) {
  return a + b
}

console.log(add(1, 2))

// 関数の戻り値の型を所得する
type ReturnTypeFromAdd = ReturnType<typeof add>

