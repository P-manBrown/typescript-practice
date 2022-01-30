export {}

class Person {
  name: string
  age: number

  // constructorはreturnしないため返り値の型を指定しない
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }
}
let Tanaka = new Person("Tanaka", 32)
console.log(Tanaka.profile())

// let hanako = new Person()

