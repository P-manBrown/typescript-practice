export {}

// オーバーロード

// 事前に型を指定（シグネチャー）
function double(value: number): number
function double(value: string): string

// 関数の実態ではany型を指定する
function double(value: any): any {
  console.log(typeof value)
  if (typeof value === "number") {
    return value * 2 
  } else {
    return value + value
  }
}

// function double(value: string):string {
//   return value + value
// }
console.log(double(100))
console.log(double("Go"))
// console.log(double(true))
// error TS2769: No overload matches this call.
// Overload 1 of 2, '(value: number): number', gave the following error.
//   Argument of type 'boolean' is not assignable to parameter of type 'number'.
// Overload 2 of 2, '(value: string): string', gave the following error.
//   Argument of type 'boolean' is not assignable to parameter of type 'string'.