// firstName の後にstring型をつけることで文字列以外を禁止できる
function sayHello (firstName: string) {
  console.log('Hello ' + firstName)
}

let firstName: string = 'Tanaka'
sayHello(firstName)
