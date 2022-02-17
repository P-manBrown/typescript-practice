export {}

// 変数や引数名の後ろに:型のように型注釈を付与することで変数や引数に格納する値を制限できる
// 型注釈は変数のデータ型が明らかな場合などは省略可能
// function sayHello (firstName: string) {
//   console.log("Hello" + firstName)
// }

// let firstName: string = "Tanaka"
// sayHello(firstName)

// 型が異なる値を使用するとコンパイル時にエラーとなる
// let age: number = 36
// sayHello(age)

// 以下のような場合にもエラーとなる
// const message = "hello!"
// message()


// 変数
// 型定義以外はJavaScriptと同じ
// 変数の型定義は const 変数名: 型 = 値 のようにする
// const employeeName: string = "田中"


// プリミティブ型
// string number boolean 型

// let age: number = 32
// let isDone: boolean = false
// let color: string = "赤"

// 型の違う値を代入するとエラーになる
// age = "35"


// 配列
// 配列に型を指定するには 配列の型[] とする
// const array: string[] = []
// array.push("tanaka")
// 以下はエラーになる
// array.push(1)
// 配列の型指定の他の方法
// const mixedArray = ["aaa", 1]
// const mixedArrayU: (string|number)[] = ['aaa', 1]    Union型
// const mixedArrayT: [string, number] = ["aaa", 2]    タプル型


// オブジェクト型
// オブジェクトとはキーとバリューによるデータ形式のインスタンス
// {キー名1: 型1; キー名2: 型2; ...}
// let 変数:{キー名1: 型1; キー名2: 型2; ...} = オブジェクト
// const 変数:{キー名1: 型1; キー名2: 型2; ...} = オブジェクト

// const user: {name: string; age: number} = {
//   name: "tanaka",
//   age: 32
// }

// console.log(user.name)
// console.log(user.age)

// オプショナルな型
// function printName(obj: {firstName: string, lastName?: string}) {
//   return
// }
// キー名の後ろに?がついていると値がなくてもエラーにならない
// printName({firstName: "takeshi"})
// printName({firstName: "takeshi", lastName: "tanaka"})


// any
// anyは特別な型で全ての方を許容する
// let user: any = { firstName: 'tanaka'}
// 以下のいずれもエラーは発生しない
// user.hello()
// user()
// user.age = 100
// user = "こんにちは"
// 他の型への代入を行ってもエラーにならない
// const n: number = user

