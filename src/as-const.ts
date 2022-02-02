export {}

let name = "Tanaka"

name = "Tatsuya"

let nickname = "Tatsuya" as const
nickname = "Tatsuya"
// nickname = "Tatsu"
// > error TS2322: Type '"Tatsu"' is not assignable to type '"Tatsuya"'.

let profile = {
  name: "Tanaka",
  height: 201
} as const

// let profile: {
//   readonly name: "Tanaka";
//   readonly height: 201;
// }

// profile.name = "Tanaka"
// error TS2540: Cannot assign to 'name' because it is a read-only property.
// profile.height = 400
// error TS2540: Cannot assign to 'height' because it is a read-only property.

// as const を記述することで別の値を代入することを制限することができる