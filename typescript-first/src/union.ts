export {}

// let value = 1
// 型推論が働き、以下のように記述するとエラーが発生
// value = "foo"
// error TS2322: Type 'string' is not assignable to type 'number'.

// union型
let value: number | string = 1
value = "foo"
value = 100