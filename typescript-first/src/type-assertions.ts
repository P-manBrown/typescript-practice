export {}

let name: any = "Tanaka"

let length = (name as string).length

// length = "foo"
// > error TS2322: Type 'string' is not assignable to type 'number'.

let name2: any = "Tanaka"
// JSXの記法と似ているため非推奨
let length2 = (<string>name2).length

