export {}

// never型は呼び出し元に戻り値が返ってこない場合に指定
function error(message: string): never {
  throw new Error(message)
}

try {
  let result = error("test")
  console.log({ result })
} catch (error) {
  console.log({error})
}

// void型との違いは戻り値があるかないか
let foo: void = undefined
// undefinedを代入するとエラーが発生
// let bar: never = undefined
// error TS2322: Type 'undefined' is not assignable to type 'never'.
// errorの場合にはエラーは発生しない
let bar: never = error(`only me!`)