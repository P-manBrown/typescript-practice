export {}

// 型互換性あり
let fooCompatible: any
let barCompatible: string = "TypeScript"

console.log(typeof fooCompatible)
// > undefined
fooCompatible = barCompatible
console.log(typeof fooCompatible)
// > string
// any型にstring型のデータを代入することでstring型になる

let fooString: string
let barString: string = "string"

fooString = barString

let string: string
let stringLiteral: "fooStringLiteral" = "fooStringLiteral"
string = stringLiteral

let fooNumber: number
let fooNumberLiteral: 1000 = 1000

fooNumber = fooNumberLiteral

// 型互換性なし
let fooIncompatible: string
let barIncompatible: number

// fooIncompatible = barIncompatible
// error TS2454: Variable 'barIncompatible' is used before being assigned.

// interfaceとclassのconstructorでも型互換性が評価される
// 構造的部分型
// https://typescriptbook.jp/reference/values-types-variables/structural-subtyping
interface Animal {
  age: number
  name: string
}
class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal
me = new Person(24, "a")