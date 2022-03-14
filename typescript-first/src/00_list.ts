export {}

// 変数や引数名の後ろに:型のように型注釈を付与することで変数や引数に格納する値を制限できる
// 型注釈は変数のデータ型が明らかな場合などは省略可能
// function sayHello (firstName: string) {
//   console.log("Hello" + firstName)
// }

// let firstName: string = "Tanaka"
// sayHello(firstName)

// 型が異なる値を使用するとコンパイル時にエラーとなる
// let age: number = 36
// sayHello(age)

// 以下のような場合にもエラーとなる
// const message = "hello!"
// message()


// 変数
// 型定義以外はJavaScriptと同じ
// 変数の型定義は const 変数名: 型 = 値 のようにする
// const employeeName: string = "田中"


// プリミティブ型
// string number boolean 型

// let age: number = 32
// let isDone: boolean = false
// let color: string = "赤"

// 型の違う値を代入するとエラーになる
// age = "35"


// 配列
// 配列に型を指定するには 配列の型[] とする
// const array: string[] = []
// array.push("tanaka")
// 以下はエラーになる
// array.push(1)
// 配列の型指定の他の方法
// const mixedArray = ["aaa", 1]
// const mixedArrayU: (string|number)[] = ['aaa', 1]    Union型
// const mixedArrayT: [string, number] = ["aaa", 2]    タプル型


// オブジェクト型
// オブジェクトとはキーとバリューによるデータ形式のインスタンス
// {キー名1: 型1; キー名2: 型2; ...}
// let 変数:{キー名1: 型1; キー名2: 型2; ...} = オブジェクト
// const 変数:{キー名1: 型1; キー名2: 型2; ...} = オブジェクト

// const user: {name: string; age: number} = {
//   name: "tanaka",
//   age: 32
// }

// console.log(user.name)
// console.log(user.age)

// オプショナルな型
// function printName(obj: {firstName: string, lastName?: string}) {
//   return
// }
// キー名の後ろに?がついていると値がなくてもエラーにならない
// printName({firstName: "takeshi"})
// printName({firstName: "takeshi", lastName: "tanaka"})


// any
// anyは特別な型で全ての方を許容する
// any型は移行でもなければ基本的には使用しない
// let user: any = { firstName: 'tanaka'}
// 以下のいずれもエラーは発生しない
// user.hello()
// user()
// user.age = 100
// user = "こんにちは"
// 他の型への代入を行ってもエラーにならない
// const n: number = user


// 関数
// 関数では引数と戻り値に対して型指定ができる
// function 関数名(引数1: 型1, 引数2: 型2...): 戻り値の型 {}
// function sayHello(name: string): string {
//   return `Hello ${name}`
// }

// sayHello("tanaka")

// 引数をオプショナルにできる
// function sayHello(name: string, greeting?: string): string {
//   return `${greeting} ${name}`
// }

// sayHello("田中")
// sayHello("田中", "こんにちは")

// 引数のデフォルト値を指定するには次のようにする
// function sayHello(name: string, greeting: string = 'こんにちは') {
//   return `${greeting} ${name}`
// }

// sayHello("田中")     こんにちは田中
// sayHello("田中", "こんばんは")    こんばんは田中

// 名前とフォーマット関数を引数として受け取りフォーマットを実行コンソールに出力
// function printName(firstName: string, formatter: (name: string) => string) {
//   console.log(formatter(firstName))
// }

// function formatName(name: string): string {
//   return `${name} sama`
// }

// printName("田中", formatName)     田中 sama

// アロー関数の場合
// (引数名: 引数の型): 戻り値の型 => `hello ${name}`
// let sayHello = (name: string): string => `hello ${name}`

// 関数を引数に取ることができる
// 関数の型を指定するには次のようにする
// 引数名は実際の関数の引数名と対応させる必要はない
// (引数名: 引数の型) => 戻り値の型

// function genBridsInfo(name: string): string[] {
//   return name.split('.')
// }

// 関数の型を利用する
// (x: string) => string[]
// function singBirds(birdInfo: (x: string) = string[]): string {
//   return birdInfo("heto, kiji")[0] + "piyo piyo"
// }

// console.log(singBirds(genBridsInfo))
// 以下はエラーになる
// console.log(singBirds('dobato'))


// 型推論
// 明示的に変数の初期化を行うと自動的に型が決定される

// const age = 10
// 次はエラーになる。（数値にlengthは使用できない）
// console.log(age.length)

// const user = {
//   name: "tanaka",
//   age: 42
// }
// 次はエラーになる。（数値にlengthは使用できない）
// console.log(user.age.length)

// 以上のように型を指定していなくても推論される
// 関数や配列なども同様に型が推論される

// 代入先の変数の値が決まっている際に代入する値と型が一致しないとエラーになる
// window.confirm関数の返り値はbooleanであるためboolean以外ではエラーとなる
// window.confirm = () => {
//   console.log('confirm')
// }


// 型アサーション
// 対象となる型に対してより具体的になる型やより汎化される型に変換する
// 変数名 = 値 as 型
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement

// const result = (response as any) as User

// 型アサーションは実行時にエラーを引き起こす可能性がある
// const hoge: any = "test"
// const fuga: number = hoge as number
// 実行時にはstring型が渡されるためエラーが起きる


// 型エイリアス
// 型指定の別名を設定する
// 後から同名の型定義をすることはできない
// type 型名 = 型
// type Name = string

// type Point = {
//   x: number;
//   y: number;
// }

// function printPoint(point: Point) {
//   console.log(`x座標は${point.x}です！`)
//   console.log(`y座標は${point.y}です！`)
// }

// printPoint({x: 100, y: 100})

// 関数自体の型も型エイリアスで定義可能
// type Formatter = (a: string) => string

// function printName(firstName: string, formatter: Formatter) {
//   console.log(formatter(firstName))
// }

// インデックス型
// オブジェクトのキー名を明記せずに型エイリアスを定義できる
// {[]: 型名}

// type Label = {
//   [key: string]: string
// }

// const labels: Label = {
//   topTitle: "トップページタイトル",
//   topSubTitle: "トップページサブタイトル",
//   topFeature1: "トップページ機能1",
//   topFeature2: "トップページ機能2",
// }

// 以下は値の型が合わないためエラー
// const hoge: Label = {
//   message: 200
// }


// インタフェース
// 型エイリアスと似た機能。より拡張性が高い
// interface 型名 {
//   プロパティ1: 型名1;
//   プロパティ2: 型名2;
//   ...
// }

// 以下のように型定義を拡張できる
// interface Point {
//   x: number;
//   y: number;
// }

// function printPoint(point: Point) {
//   console.log(`x座標は${point.x}です`)
//   console.log(`y座標は${point.y}です`)
//   console.log(`z座標は${point.z}です`)
// }

// interface Point {
//   z: number;
// }

// 以下はzがないためエラーとなる
// printPoint({x: 100, y: 100})
// 以下は問題なし
// printPoint({x: 100, y: 100, z: 200})

// クラスの振る舞いの型を定義してimplementsを使用してクラスに実装を与えられる
// interface Point {
//   x: number;
//   y: number;
//   z: number;
// }

// 次はzが存在しないためエラーとなる
// class MyPoint implements Point {
//   x: number;
//   y: number;
// }

// 以下のように?を使用してオプショナルなプロパティを定義できる
// interface Point {
//   x: number;
//   y: number;
//   z?: number;
// }
// 以下はエラーは発生しない
// class MyPoint implements Point {
//   x: number;
//   y: number;
// }

// extendsを使用して他のインタフェースを拡張できる
// interface Colorful {
//   color: string;
// }

// interface Circle {
//   radius: number;
// }

// interface ColorfulCircle extends Colorful, Circle {}

// const cc: ColorfulCircle ={
//   color: "赤",
//   radius: 20
// }

// 型エイリアスとインタフェースは似ているが次のような違いがある
// インタフェースはマッチする型でもその値以外に他のフィールドやメソッドがある
// 型エイリアスはオブジェクトの型そのものを表すもの
// オブジェクトそのものではなく、クラスやオブジェクトの一部のプロパティや
// 関数含む一部の振る舞いを定義するのであれば、インタフェースを使用するべき


// クラス
// クラスに対して型を定義することができる
// class クラス名 {
//   フィールド1: 型1;
//   フィールド2: 型2;
//   ..
// }

// class Point {
//   x: number;
//   y: number;
//   // 引数がない場合の初期値を指定
//   constructor(x: number = 0, y: number = 0) {
//     this.x = y
//     this.y = y
//   }
//   // 戻り値がない関数を定義するためにvoidを指定
//   moveX(n: number): void {
//     this.x += n
//   }
//   moveY(n: number): void {
//     this.y += n
//   }
// }

// const point = new Point()
// point.moveX(10)
// console.log(`${point.x}, ${point.y}`)      // 10, 0

// extendsを使用して他のクラスを継承できる
// class Point3D extends Point {
//   z: number;

//   constructor(x: number = 0, y: number = 0, z: number = 0) {
//     // 継承元のコンストラクタを呼び出す
//     super(x, y)
//     this.z = z
//   }

//    moveZ(n: number): void {
//     this.z += n
//    }
// }

// const point3D = new Point3D()
// // 継承元のメソッドを呼び出せる
// point3D.moveX(10)
// point3D.moveZ(20)
// console.log(`${point3D}, ${point3D.y}, ${point3D.z}`) // 10, 0, 20

// インタフェースに対してimplementsを使用することでクラスに対する実装を強制可能

// interface IUser {
//   name: string;
//   age: number;
//   sayHello: () => string; // 引数なしで文字列を返却
// }

// class User implements IUser {
//   name: string;
//   age: number;

//   constructor() {
//     this.name = ""
//     this.age = 0
//   }
// }

// インタフェースに定義されているメソッドを実装しないとエラーになる
// sayHello(): string {
//   return `こんにちは、私は${this.name}、${this.age}歳です。`
// }

// const user = new User()
// user.name = "田中"
// user.age = 34

// console.log(user.sayHello())

// アクセス修飾子
// クラスには public, private, protected がある
// これらを扶養することでメンバやメソッドのアクセス範囲を制御できる
// アクセス修飾子を指定しない場合はpublicとして扱われる

// class BasePoint3D {
//   public x: number;
//   private y: number;
//   protected z: number;
// }

// // インスタンス化を行なった場合のアクセス制御の例
// const basePoint = new BasePoint3D()
// basePoint.x
// basePoint.y // privateであるためアクセス不可
// basePoint.z // protectedのためアクセス不可

// // クラスを継承した際のアクセス制御
// class ChildPoint extends BasePoint3D {
//   constructor() {
//     super()
//     this.x
//     this.y // privateであるためアクセス不可
//     this.z
//   }
// }


// 重要な型
// Enum型/列挙型
// 名前の追加定数セットを定義できる

// const Direction = {
//   "Up": 0,
//   "Down": 1,
//   "Left": 2,
//   "Right": 3,
// }
// 上記のような定義を以下のようにenumを使用して定数を定義できる

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// enum Directionを参照
// let direction: Direction = Direction.Left
// 2という数字が出力される
// console.log(direction)

// enumを代入した変数にバツのかたの値を代入しようとするとエラーとなる
// direction = "Left"

// 文字列ベースのEnum型
// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT"
// }

// APIのパラメータとして文字列が渡されたケース
// const value = "DOWN"
// 文字列からEnum型に変換する
// const enumValue = value as Direction

// if (enumValue === Direction.Down) {
//   console.log("Down is selected")
// }
// 文字列ベースの場合には自動インクリメント機能はないが
// 文字列で渡される値とEnumの定数値を比較する際に便利


// ジェネリック型
// クラスや関数で使用する型を抽象化して外部から具体的な型を指定する
// 汎用的なクラスや関数を実装するのに便利

// Tはクラス内で使用する仮の型の名前
// class Queue<T> {
//   // 内部にTの型の配列を初期化する
//   private array: T[] = []
//   // Tの型の値を配列に追加する
//   push(item: T) {
//     this.array.push(item)
//   }
//   // Tの型の配列の最初の値を取り出す
//   pop(): T | undefined {
//     return this.array.shift()
//   }
// }

// const queue = new Queue<number>() // 数値型に設定
// queue.push(111)
// queue.push(112)
// queue.push("aaaa") // string型なのでエラー

// let str = "foge"
// str = queue.pop() // strはnumber型ではないのでエラー
// Reactコンポーネントはジェネリック型のクラスとして定義されている

// Union型とIntersection型
// &や|を使用して型を定義できる
// Union型は|を使用していずれかの型であればいい型を生成する
// function printId(id: number | string) {
//   console.log(id)
// }

// printId(11)
// printId("11")

// 型エイリアスとして定義することもできる
// type Id = number | string

// function printId(id: Id) {
//   console.log(id)
// }

// type Identity = {
//   id: number | string;
//   name: string;
// }

// type Contact = {
//   name: string;
//   email: string;
//   phone: string;
// }

// type IdentityOrContact = Identity | Contact

// const id: IdentityOrContact = {
//   id: "111",
//   name: "田中",
// }

// const contact: IdentityOrContact = {
//   name: "田中",
//   email: "tanaka@example.com",
//   phone: "02349",
// }

// Intersection型は複数の型をマージして1つになった型を生成する

// type Identity = {
//   id: number | string;
//   name: string;
// }

// type Contact = {
//   name: string;
//   email: string;
//   phone: string;
// }

// type Employee = Identity & Contact

// const employee: Employee = {
//   id: "222",
//   name: "田中",
//   email: "tanaka@example.com",
//   phone: "07808"
// }

// 次はidがないためエラーになる
// const employeeContact: Employee = {
//   name: "田中",
//   email: "tanaka@example.com",
//   phone: "0392"
// }


// リテラル型
// |で区切り、決まった文字列や数値しか入らない型を生成する
// 変数名: 許可データ1 | 許可データ2 | ...

// let postStatus: "draft" | "published" | "deleted"
// postStatus = "draft"
// 以下は許可されていないデータが入っているためエラーとなる
// postStatus = "drafts"

// リテラル型は数字に対して使用することもできる
// function compare(a: string, b: string): -1 | 0 | 1 {
//   return a === b ? 0 : a > b ? 1 : -1
// }

// never型
// 決して発生しない値の種類を表す
// 常に例外を発生させる関数などで決して値が返されることのない戻り値の型に使用
// function error(message: string): never {
//   throw new Error(message)
// }

// function foo(x: string| number | number[]): boolean {
//   if(typeof x === 'string') {
//     return true
//   } else if (typeof x === 'number') {
//     return false
//   }
//   return error('Never happens')
// }

// if文やswitch文でTypeScriptの型の条件分岐に漏れがないことを保証する
// 将来的に定数が追加される可能性のあるenum型を定義
// enum PageType {
//   ViewProfile,
//   EditProfile,
//   ChangePassword,
// }

// const getTitleText = (type: PageType) => {
//   switch (type) {
//     case PageType.ViewProfile:
//       return "Setting"
//     case PageType.EditProfile:
//       return "Edit Profile"
//     case PageType.ChangePassword:
//       return "Change Password"
//     default:
//     // never型を使用することで将来PageTypeに定数が追加された際にエラーが発生する
//       const wrongType: never = type
//       throw new Error(`${wrongType} is not in PageType`)
//   }
// }


// Optional Chaining
// ネストされたオブジェクトのプロパティが存在するかの条件分岐を簡潔に記述できる

// // nullになりうるsocialというプロパティの型を定義する
// interface User {
//   name: string
//   social?: {
//     facebook: boolean
//     twitter: boolean
//   }
// }

// let user: User

// user = {name: "田中", social: {facebook: true, twitter: true}}
// console.log(user.social?.facebook)
// socialが存在しないケースでも実行時にエラーとならない
// user = {name: "田中"}
// console.log(user.social?.facebook)


// Non-null Assertion Operator
// nullでないことを示したいときに明示的に問題がないことを示せる
// 変数などの後に!を記述する

// userがnullの場合実行時エラーになる可能性があるプロパティへのアクセスはエラー
// !を使用することでコンパイルエラーを抑制
// function processUser(user?: User) {
//   let s = user!.name
// }

// Non-null Assertionは実行時にはエラーが発生する可能性がある


// 型ガード
// 条件分岐で型チェックを行うとその条件分岐ブロック以降は変数の型を絞り込む

// function addOne(value: number | string) {
//   if (typeof value === "string") {
//     return Number(value) + 1
//   }
//   return value + 1
// }

// console.log(addOne(10)) // 11
// string型もnumber型であるとして扱われる
// console.log(addOne("23")) // 24

// 型ガードを使用するとasを使用する型アサーションよりも安全に型を利用できる

// type User = {
//   info?: {
//     name: string;
//     age: number;
//   }
// }

// let response = {} // JSON形式のAPIレスポンスが代入されているものとする
// const user = (response as any) as User

// オプショナルプロパティは以下のuser.info.nameにアクセスしてもエラーなし
// if (user.info) {
//   console.log(user.info.name)
// }


// keyofオペレーター
// その型が持つ各プロパティの型のUnion型を返す

// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// type UserKey = keyof User // 'name' | 'age' | 'email'というUnion型になる

// const key1: UserKey = 'name'
// 以下はエラーになる
// const key2: UserKey = 'phone'

// 第一引数に渡したオブジェクトの型のプロパティ名のUnion型と
// 第二引数で渡す値の型が一致しない場合にはエラーとなる
// 
// function getProperty<T,K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key]
// }

// const user: User = {
//   name: "田中",
//   age: 49,
//   email: "takana@example.com"
// }

// nameは型のキーに存在するためstring型の値が返却される
// const userName = getProperty(user, "name")

// genderはオブジェクトのキーに存在しないためコンパイルエラー
// const userGender = getProperty(user, "gender")


// インデックス型
// オブジェクトのプロパティが可変のとき、まとめて型を定義できる

// type SupportVersions = {
//   [env: number]: boolean;
// }

// stringのプロパティに定義した場合エラーが起きる
// let versions: SupportVersions = {
//   102: false,
//   103: false,
//   104: false,
//   "v105": true, // エラー
// }


// readonly
// readonlyプロパティを指定されたプロパティは変更不可になる

// type User = {
//   readonly name: string;
//   readonly gender: string;
// }

// let user: User = {
//   name: "田中",
//   gender: "男"
// }
// 代入しようとするとエラーになる
// user.gender = "女"

// constが変数の代入に対して行う宣言であるのに対して
// readonlyはオブジェクトやクラスのプロパティに対して行う宣言

// Readonly型というジェネリック型も存在する

// type User = {
//   name: string;
//   gender: string;
// }

// type UserReadonly = Readonly<User>

// let user: User = {name: "田中", gender: "女"}
// let userReadonly: UserReadonly = {name: "田中", gender: "女"}

// user.name = "田中" // エラーなし
// 以下はコンパイル時にエラーが発生する
// userReadonly.name = "TANAKA"


// unknown
// anyと同じようにどのような値も代入できる
// anyと異なり、代入された値は任意の関数やプロパティにアクセスできない
// const x: unknown = 124
// const y: unknown = "Hello"

// 関数やプロパティにアクセスした際にunknown型のままではエラーとなる
// console.log(x.toFixed(1))

// 型安全な状況下で関数やプロパティにアクセスして実行可能
// if (typeof x === "number") {
//   console.log(x.toFixed(1))
// }

// if (typeof y === "string") {
//   console.log(y.toLowerCase())
// }

// anyよりも安全
