export {}

// publicは省略可
// privateを指定することでPerson外では参照することができなくなる
// protectedは継承したクラス内で参照可能
// https://techtechmedia.com/public-private-protected/

class Person {
  public name: string
  public age: number
  protected nationality: string
  // constructorはreturnしないため返り値の型を指定しない
  constructor(name: string, age: number, nationality: string) {
    this.name = name
    this.age = age
    this.nationality = nationality
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality)
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }
}

let tanaka = new Person("Tanaka", 32, "Japan")
console.log(tanaka.profile())
// ＞name: Tanaka, age: 32
// Profile内のため参照可能
console.log(tanaka.name)
// > Tanaka
// console.log(tanaka.age)
// > error TS2341: Property 'age' is private and only accessible within class 'Person'.
let kato = new Android("kato", 32, "Japan")
// console.log(kato.nationality)
// > error TS2445: Property 'nationality' is protected and only accessible within class 'Person' and its subclasses.
console.log(kato.profile())
// name: kato, age: 32, nationality: Japan