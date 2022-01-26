export {}

// 別名の頭文字は大文字
type Mojiretu = string

const fooString: string = "Hello"
let fooMojiretu: Mojiretu = "Hello"
// fooMojiretu = 2


type Profile = {
  name: string,
  age: number
}
const example1:Profile = {
  name: "田中",
  age: 139
}

// typeof XはXを参照する
type Profile2 = typeof example1
