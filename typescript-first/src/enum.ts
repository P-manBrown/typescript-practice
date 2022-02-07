export {}

enum Months {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

console.log(Months.Jan)
console.log(Months.Feb)
console.log(Months.Dec)
// 0
// 1
// 11

//  JavaScriptの場合
// const MonthsJs = {
//   Jan: 0,
//   Feb: 1,
// }
// console.log(Months.Jan)
// console.log(Months.Feb)
// 0
// 1

// 以下のようにオーバーライドすることが可能
enum Months2 {
  Jan =1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
console.log(Months2.Jan)
console.log(Months2.Feb)
console.log(Months2.Dec)
// 1
// 2
// 12

enum COLORS {
  RED = "#FF0000",
  WHITE = "#FFFFFF",
  GREEN = "#008000"
}

let green = COLORS.GREEN
console.log({ green })

// 設定していないものを指定するとエラーが発生
// COLORS.BLACK
// error TS2339: Property 'BLACK' does not exist on type 'typeof COLORS'.

// 以下のように追加することができる
enum COLORS {
  BLACK = "#000000"
}
COLORS.BLACK
