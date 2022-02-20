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


// 型推論
// 明示的に変数の初期化を行うと自動的に型が決定される

// const age = 10
// 次はエラーになる。（数値にlengthは使用できない）
// console.log(age.length)

// const user = {
//   name: "tanaka",
//   age: 42
// }
// 次はエラーになる。（数値にlengthは使用できない）
// console.log(user.age.length)

// 以上のように型を指定していなくても推論される
// 関数や配列なども同様に型が推論される

// 代入先の変数の値が決まっている際に代入する値と型が一致しないとエラーになる
// window.confirm関数の返り値はbooleanであるためboolean以外ではエラーとなる
// window.confirm = () => {
//   console.log('confirm')
// }


// 型アサーション
// 対象となる型に対してより具体的になる型やより汎化される型に変換する
// 変数名 = 値 as 型
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement

// const result = (response as any) as User

// 型アサーションは実行時にエラーを引き起こす可能性がある
// const hoge: any = "test"
// const fuga: number = hoge as number
// 実行時にはstring型が渡されるためエラーが起きる


// 型エイリアス
// 型指定の別名を設定する
// type 型名 = 型
// type Name = string

// type Point = {
//   x: number;
//   y: number;
// }

// function printPoint(point: Point) {
//   console.log(`x座標は${point.x}です！`)
//   console.log(`y座標は${point.y}です！`)
// }

// printPoint({x: 100, y: 100})

// 関数自体の型も型エイリアスで定義可能
// type Formatter = (a: string) => string

// function printName(firstName: string, formatter: Formatter) {
//   console.log(formatter(firstName))
// }

// インデックス型
// オブジェクトのキー名を明記せずに型エイリアスを定義できる
// {[]: 型名}

// type Label = {
//   [key: string]: string
// }

// const labels: Label = {
//   topTitle: "トップページタイトル",
//   topSubTitle: "トップページサブタイトル",
//   topFeature1: "トップページ機能1",
//   topFeature2: "トップページ機能2",
// }

// 以下は値の型が合わないためエラー
// const hoge: Label = {
//   message: 200
// }