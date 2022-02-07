export {}

// class Person {
//   public name: string
//   private age: number
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// 上記を以下のように記述することができる
class Person {
  constructor(public name: string, protected age: number) {
  }
}

const me = new Person("田中", 104)
console.log(me)
