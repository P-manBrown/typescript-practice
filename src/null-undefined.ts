export {}

// null型はnullのみ許容
let absence: null = null
// absence = "moji"
// error TS2322: Type '"moji"' is not assignable to type 'null'.

// undefined型はundefinedのみ許容
let data: undefined = undefined
// data = 329
// error TS2322: Type '329' is not assignable to type 'undefined'.