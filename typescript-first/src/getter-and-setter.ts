export {}

// owner 
// 所有者を管理
// 初期化時に設定
// 途中で変更ができない
// 参照可能
// secretNumber
// 個人番号を管理
// 初期化時に設定
// 途中で変更可能
// 参照不可

class MyNumberCard {
  private _owner: string
  private _secretNumber: number

  constructor(owner: string, secretNumber: number) {
    this._owner = owner
    this._secretNumber = secretNumber
  }
  // 値を参照するためのメソッドをgetterという
  get owner() {
    return this._owner
  }
  // 変更可能にするための記述(setter) 
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`
  }
}

let card = new MyNumberCard("田中", 1234567890)
// 以下はエラー
// card.owner = "Tanaka"
console.log(card.owner)
// 以下はエラー
// card.secretNumber
// 以下はエラー
// card._secretNumber
console.log(card.debugPrint())
// > secretNumber: 1234567890
card.secretNumber = 1111111111
console.log(card.debugPrint())
// > secretNumber: 1111111111
console.log(card.secretNumber)
// > undefined