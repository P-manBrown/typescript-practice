export {}

class Me {
  static isProgrammer: boolean = true
  static firstName: string = "達弥"
  static lastName: string = "田中"

  static work() {
    // `Hey, guys! This is ${firstName} Are you interested in TypeScript? Let's dive into TypeScript!`
    // > error TS2662: Cannot find name 'firstName'. Did you mean the static member 'Me.firstName'?
    // `Hey, guys! This is ${Me.firstName} Are you interested in TypeScript? Let's dive into TypeScript!`でも可
    return `Hey, guys! This is ${this.firstName} Are you interested in TypeScript? Let's dive into TypeScript!`
  }
}

// let me = new Me()
// console.log(me.isProgrammer)
// > error TS2576: Property 'isProgrammer' does not exist on type 'Me'. Did you mean to access the static member 'Me.isProgrammer' instead?

// 静的メンバの場合にはインスタンスを生成する必要なし
console.log(Me.isProgrammer)
console.log(Me.work())


