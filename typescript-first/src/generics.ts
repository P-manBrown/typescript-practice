export {}

// const echo = (arg: number): number => {
//   return arg
// }

// const echo = (arg: string): string => {
//   return arg
// }

// 以下のように記述することができる
const echo = <T>(arg: T): T => {
  return arg
}
// Tは抽象的な型引数
console.log(echo<number>(100))
// > 100
console.log(echo<string>("hello"))
// > hello
console.log(echo<boolean>(false))
// > false

class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value
  }
}

console.log(new Mirror<number>(123).echo())
// > 123
console.log(new Mirror<string>("hello, generics!").echo())
// > hello, generics!
console.log(new Mirror<boolean>(true).echo())
// > true