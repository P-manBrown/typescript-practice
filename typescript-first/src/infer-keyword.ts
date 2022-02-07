export {}

// function add(a: number, b: number) {
//   return a + b
// }
// console.log(add(1, 2))
// // 関数の戻り値の型を所得する
// type ReturnTypeFromAdd = ReturnType<typeof add>



// type ReturnType<T extends (...args: any) => any> = T extends (
//   ...args: any
// ) => infer R 
// ? R 
// : any;
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R 
? R 
: any;
// infer = 条件の一部としてジェネリクス型（<T extends (...args: any) => any>）を宣言することができる
// infer R = <T extends (...args: any) => any> 後ろのanyを取得
// (...args: any) => any = 関数を意味する → Tは関数


