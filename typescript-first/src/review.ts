export {}

// // firstName の後にstring型をつけることで文字列以外を禁止できる
// function sayHello (firstName: string) {
//   console.log('Hello ' + firstName)
// }

// let firstName: string = 'Shohei'
// sayHello(firstName)

// // numberを渡すとエラーが発生する
// // let age: number = 29
// // sayHello(age)
// // error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

// // const message = "hello!"
// // ブロック スコープの変数 'message' を再宣言することはできません。

// // プリミティブ型(string, number, boolean) 
// let age: number = 32
// let isDone: boolean = false
// let color: string = "赤"

// // let mynumber: number = "300"
// // 型 'string' を型 'number' に割り当てることはできません。ts(2322)

// // 配列
// // 配列に型を指定するためには型[]で指定する

// const array: string[] = []
// array.push("Tanaka")
// // array.push(23)
// // error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

// // 配列に複数の型がある場合にはUnion型やタプルを用いる
// const mixedArray = ['foo', 1]
// // Union型
// const mixedArrayU: (string|number)[] = ['foo', 1]
// // タプル
// const mixedArrayT: [string, number] = ['foo', 1]

// // オブジェクト型
// // キーと型のペアをしてすることで定義する
// let user: { name: string, age: number } = {
//   name: '田中',
//   age: 92
// }

// console.log(user.age)
// console.log(user.age)

// // オプショナルにするためには?をつける
// let member: { name: string, age?: number } = {
//   name: '田中'
// }

// // 全て許容する場合には any を使用する
// let player: any = { firstName: 'Shohei'}
// // player.hello()
// // player()
// player.age = 128
// const n: number = player

// // 関数の型定義
// function sayHey(name: string): string {
//   return `Hey!! ${name}`
// }
// console.log(sayHey('Takuya'))

// // オプショナルにする
// // デフォルト値を設定する
// function sayFoo(name?: string, greeting: string = "HOOOOO"): string {
//   return `${greeting}!! ${name}`
// }
// console.log(sayFoo())
// console.log(sayFoo('Takeshi', 'Foooooo'))

// function printName(firstName: string, formatter: (name: string) => string) {
//   console.log(formatter(firstName))
// }

// function formatName(name: string): string {
//   return `Esq.${name}`
// }

// printName('Tanaka', formatName)

// // アロー関数の型定義
// let sayHoo = (name: string): string => `HOOOO!! ${name}`

// function genBirdsInfo(name: string): string[]{
//   return name.split(',')
// }

// // 関数の型を利用
// // (x: string) => string[]
// function singBirds(birdinfo: (x: string) => string[]): string{
//   return birdinfo('hato, kiji')[0] + ' piyo piyo'
// }

// console.log(singBirds(genBirdsInfo))
// // console.log(singBirds('dobato'))
// // TS2345: Argument of type 'string' is not assignable to parameter of type '(x: string) => string[]'.

// 型推論
// 明示的な変数の初期化を行うと型推論により自動的に型が決定される

const age = 10
// console.log(age.length)
// プロパティ 'length' は型 '10' に存在しません。ts(2339)

// const user = {
//   name: "kohei",
//   age: 32
// }
// console.log(user.age.length)
// プロパティ 'length' は型 'number' に存在しません。ts(2339)

// 代入する先の変数の値の方が決まっていると代入する値と型が一致しない場合にエラーになる。
// window.confirmはboolean型を返すためそれ以外はエラーとなる
// window.confirm = () => {
//   console.log('confirm 関数')
// }
// 型 'void' を型 'boolean' に割り当てることはできません。ts(2322)
// 型推論により型を書く煩雑さは軽減されている。
