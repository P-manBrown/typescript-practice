export {}

class Mahotsukai {}
class Souryo {}

// 二つのクラスを継承することはできない
class Tanaka extends Mahotsukai {}

// インターフェースを使用することで多重継承をすることができる
interface Kenja {
  ionazun(): void
}
interface Senshi {
  kougeki(): void
}

class Takahashi implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun")
  }

  kougeki(): void {
    console.log("kougeki")
  }
}

const jiro = new Takahashi()
jiro.ionazun()
jiro.kougeki()