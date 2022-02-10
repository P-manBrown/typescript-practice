// firstName の後にstring型をつけることで文字列以外を禁止できる
function sayHello (firstName: string) {
  console.log('Hello ' + firstName)
}

let firstName: string = 'Tanaka'
sayHello(firstName)

// numberを渡すとエラーが発生する
// let age: number = 29
// sayHello(age)
// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.


