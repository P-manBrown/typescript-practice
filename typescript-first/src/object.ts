export {}

// objectでは内容が変更されてもエラーは発生しない
let profile1: object = { name: "田中" }
profile1 = { birthYear: 3000 }

// 以下のように指定することで内容にも型を指定することができる
let profile2: { name: string } = { name: "田中" }
// profile2 = { birthYear: 3000 }
// error TS2322: Type '{ birthYear: number; }' is not assignable to type '{ name: string; }'.
// Object literal may only specify known properties, and 'birthYear' does not exist in type '{   name: string; }'.