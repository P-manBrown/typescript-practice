export {}

abstract class Animal {
  abstract cry(): string
}

class Lion extends Animal {
  cry(): string {
    return "roar"
  }
}

// class Tiger extends Animal {
// }
// > error TS2515: Non-abstract class 'Tiger' does not implement inherited abstract member 'cry' from class 'Animal'.
// cryを実装していなければエラーが発生