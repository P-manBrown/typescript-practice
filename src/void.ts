export {}

// undefinedを型に指定した場合にはundefinedをreturnする必要がある
// return undefined
// 関数に型を指定する場合にはreturnで返却される値の型を指定する
// return文を記述しない場合にはvoidを指定する

function returnNothing(): void {
  console.log("I don't return anything!")
}

console.log(returnNothing())