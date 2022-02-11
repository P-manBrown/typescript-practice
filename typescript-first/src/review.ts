// firstName の後にstring型をつけることで文字列以外を禁止できる
function sayHello (firstName: string) {
  console.log('Hello ' + firstName)
}

let firstName: string = 'Tanaka'
sayHello(firstName)

// numberを渡すとエラーが発生する
// let age: number = 29
// sayHello(age)
// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

// const message = "hello!"
// ブロック スコープの変数 'message' を再宣言することはできません。

// プリミティブ型
let age: number = 32
let isDone: boolean = false
let color: string = "赤"

// let mynumber: number = "300"
// 型 'string' を型 'number' に割り当てることはできません。ts(2322)

// 配列
// 配列に型を指定するためには型[]で指定する

const array: string[] = []
array.push("Tanaka")
// array.push(23)
// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

// 配列に複数の型がある場合にはUnion型やタプルを用いる
const mixedArray = ['foo', 1]
// Union型
const mixedArrayU: (string|number)[] = ['foo', 1]
// タプル
const mixedArrayT: [string, number] = ['foo', 1]

// オブジェクト型
// キーと型のペアをしてすることで定義する
let user: { name: string, age: number } = {
  name: '田中',
  age: 92
}

console.log(user.age)
console.log(user.age)

// オプショナルにするためには?をつける
let member: { name: string, age?: number } = {
  name: '田中'
}
