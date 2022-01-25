export {}

let isFinished: boolean = true
isFinished = false
// isFinished = 1 
// error TS2322: Type 'number' is not assignable to type 'boolean'.
console.log({ isFinished })
