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
// any型は移行でもなければ基本的には使用しない
// let user: any = { firstName: 'tanaka'}
// 以下のいずれもエラーは発生しない
// user.hello()
// user()
// user.age = 100
// user = "こんにちは"
// 他の型への代入を行ってもエラーにならない
// const n: number = user


// 関数
// 関数では引数と戻り値に対して型指定ができる
// function 関数名(引数1: 型1, 引数2: 型2...): 戻り値の型 {}
// function sayHello(name: string): string {
//   return `Hello ${name}`
// }

// sayHello("tanaka")

// 引数をオプショナルにできる
// function sayHello(name: string, greeting?: string): string {
//   return `${greeting} ${name}`
// }

// sayHello("田中")
// sayHello("田中", "こんにちは")

// 引数のデフォルト値を指定するには次のようにする
// function sayHello(name: string, greeting: string = 'こんにちは') {
//   return `${greeting} ${name}`
// }

// sayHello("田中")     こんにちは田中
// sayHello("田中", "こんばんは")    こんばんは田中

// 名前とフォーマット関数を引数として受け取りフォーマットを実行コンソールに出力
// function printName(firstName: string, formatter: (name: string) => string) {
//   console.log(formatter(firstName))
// }

// function formatName(name: string): string {
//   return `${name} sama`
// }

// printName("田中", formatName)     田中 sama

// アロー関数の場合
// (引数名: 引数の型): 戻り値の型 => `hello ${name}`
// let sayHello = (name: string): string => `hello ${name}`

// 関数を引数に取ることができる
// 関数の型を指定するには次のようにする
// 引数名は実際の関数の引数名と対応させる必要はない
// (引数名: 引数の型) => 戻り値の型

// function genBridsInfo(name: string): string[] {
//   return name.split('.')
// }

// 関数の型を利用する
// (x: string) => string[]
// function singBirds(birdInfo: (x: string) = string[]): string {
//   return birdInfo("heto, kiji")[0] + "piyo piyo"
// }

// console.log(singBirds(genBridsInfo))
// 以下はエラーになる
// console.log(singBirds('dobato'))
