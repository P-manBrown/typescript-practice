export {}

const kansu = ():number => 43

// any型の場合にはエラーなし
let numberAny: any = kansu()
let sumAny = numberAny + 10

// unknown型はエラー発生
// unknown型のため数値ではない場合があり足し算はできない可能性があるため
let numberUnknown: unknown = kansu()
// let sumUnknown = numberUnknown + 10
// error TS2571: Object is of type 'unknown'.
// エラーを解消するにはtypeof（データ型を返す演算子）で型を判定する
if (typeof numberUnknown === "number") {
  let sumUnknown = numberUnknown + 10
}
