export {}

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

let tanaka = new Person("田中", 32)
console.log(tanaka)

type PersonType = typeof Person

type Profile = ConstructorParameters<PersonType>

const profile: Profile = ["高橋", 42]
const takahashi = new Person(...profile)
console.log(takahashi)

// type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

type MyConstructorParameters<
  T extends abstract new (...args: any) => any
> = T extends abstract new (...args: infer P) => any ? P : never;

// T extends abstract new (...args: any) => any = Tはクラスの型
// T extends abstract new (...args: infer P) => any = クラスの型か否か評価
// P = 引数の型
