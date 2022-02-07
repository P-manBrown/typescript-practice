export {}

let bmi = (height: number, weight: number): number => weight / (height * height)

// 引数を一つしか与えないとエラーが発生
// bmi(1.7)
// error TS2554: Expected 2 arguments, but got 1.

// bmi(身長, 体重, console.logで出力するか否か)
// bmi(1.7, 51, true)
// bmi(1.7, 51, false)
// bmi(1.7, 51)

// 引数の直後に?を記述することでオプショナルに設定できる
let bmi2 = (height: number, weight: number, printable?: boolean): number => {
  const bmi: number = weight / (height * height)
  if (printable) {
    console.log({ bmi })
  }
  return bmi
}
bmi2(1.7, 51, true)



