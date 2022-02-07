export {}

// 全てオプショナルにする
type Profile = {
  name: string
  age: number
  zipCode: number
}

type PartialType = Partial<Profile>
// type PartialType = {
//   name?: string | undefined;
//   age?: number | undefined;
//   zipCode?: number | undefined;
// }


// 全て必須にする
type Profile2 = {
  name: string
  age?: number
  zipCode?: number
}

type RequiredType = Required<Profile2>
// type RequiredType = {
//   name: string;
//   age: number;
//   zipCode: number;
// }