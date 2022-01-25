export {}

// 配列の順序を変更してもエラーにはならない
let profile: (string | number)[] = ["田中", 34]
profile = [34, "田中"]

// 制約を強くするためにtuple型を使用する
let profile2: [string, number] = ["田中", 34]
// profile2 = [34, "田中"]
// 順番を変更するとエラーが発生する
// error TS2322: Type 'number' is not assignable to type 'string'.
// error TS2322: Type 'string' is not assignable to type 'number'.