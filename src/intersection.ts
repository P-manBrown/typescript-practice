export {}

type Pitcher1 = {
  throwingSpeed: number
}

type Batter1 = {
  battingAverage: number
}

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
}

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
}

// 交差型を使用することで以下のように記述せずに型を指定することができる
// type TwoWayPlayer = {
//   throwingSpeed: number,
//   battingAverage: number, 
// }
type TwoWayPlayer = Pitcher1 & Batter1

const OtaniShohei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
}
