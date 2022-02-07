export {}

// class VisaCard {
//   readonly owner: string

//   constructor(owner: string) {
//     this.owner = owner
//   }
// }
// 上記を以下のように記述することができる
class VisaCard {
  constructor(public readonly owner: string) {
  }
}
let myVisaCard = new VisaCard("高橋")
console.log(myVisaCard.owner)
// myVisaCard.owner = "田中"
// > error TS2540: Cannot assign to 'owner' because it is a read-only property.


