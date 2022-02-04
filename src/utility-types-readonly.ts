export {}

type Profile = {
  name: string
  age: number
}

const me: Profile = {
  name: "Takahashi",
  age: 42
}

me.age++

console.log(me)

type PersonalDataType = Readonly<Profile>

const friend: PersonalDataType = {
  name: "田中",
  age: 19
}

// friend.age++
// error TS2540: Cannot assign to 'age' because it is a read-only property.

type Yomitorisenyo<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitorisenyoProfile = Yomitorisenyo<Profile>
// type YomitorisenyoProfile = {
//   readonly name: string;
//   readonly age: number;
// }

