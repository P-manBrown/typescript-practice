export {}


namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string, 
      public middleName: string, 
      public lastName: string
    ){}
  }
}


const me = new Japanese.Tokyo.Person("田中")
console.log(me.name)
// > 田中

const meOsaka = new Japanese.Osaka.Person("高橋")
console.log(meOsaka.name)
// > 高橋

const michael = new English.Person("Michael", "Joseph", "Jackson")
console.log(michael)
// > Person {
//   firstName: 'Michael',
//   middleName: 'Joseph',
//   lastName: 'Jackson'
//   }