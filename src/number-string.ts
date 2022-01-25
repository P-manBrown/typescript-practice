export {}

let year: number = 1976
// year = false
// error TS2322: Type 'boolean' is not assignable to type 'number'.
console.log(year)

let age: number = 0x2b
console.log(age)

let name: string = "田中"
// name = 10
// error TS2322: Type 'number' is not assignable to type 'string'.
console.log(name)
