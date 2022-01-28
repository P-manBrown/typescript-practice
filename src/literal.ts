export {}

let dayOfTheWeek: "日"|"月"|"火"|"水"|"木"|"金"|"土" = "日"
dayOfTheWeek = "月"
// dayOfTheWeek = "22"
// error TS2322: Type '"22"' is not assignable to type '"日" | "月" | "火" | "水" | "木" | "金" | "土"'.


let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1
month = 12
// month = 31
// error TS2322: Type '31' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12'.

let TRUE: true = true 
// TRUE = false 
// error TS2322: Type 'false' is not assignable to type 'true'.