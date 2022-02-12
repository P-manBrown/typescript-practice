// firstName の後にstring型をつけることで文字列以外を禁止できる
function sayHello (firstName: string) {
  console.log('Hello ' + firstName)
}

let firstName: string = 'Shohei'
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

// 全て許容する場合には any を使用する
let player: any = { firstName: 'Shohei'}
// player.hello()
// player()
player.age = 128
const n: number = player

// 関数の型定義
function sayHey(name: string): string {
  return `Hey!! ${name}`
}
console.log(sayHey('Takuya'))

// オプショナルにする
// デフォルト値を設定する
function sayFoo(name?: string, greeting: string = "HOOOOO"): string {
  return `${greeting}!! ${name}`
}
console.log(sayFoo())
console.log(sayFoo('Takeshi', 'Foooooo'))

function printName(firstName: string, formatter: (name: string) => string) {
  console.log(formatter(firstName))
}

function formatName(name: string): string {
  return `Esq.${name}`
}

printName('Tanaka', formatName)

// アロー関数の型定義
let sayHoo = (name: string): string => `HOOOO!! ${name}`
