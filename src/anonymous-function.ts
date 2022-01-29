export {}

// bmi直後のアノテーションは省略可。無名関数の場合には`(引数: 型) => 返り値の型`で記述する。
let bmi: (height: number, weight: number) => number = function(height: number, weight: number): number {
  return weight / (height * height)
}

console.log(bmi(1.7, 65))
