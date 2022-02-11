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
