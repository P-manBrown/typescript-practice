export {}

type Profile = {
  name: string
  age: number
}

type PartialProfile = Partial<Profile>

// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
// keyof T = Tの型の全プロパティを文字列リテラル型のユニオンタイプスで取得する
// type PropertyTypes = keyof Profile
// type PropertyTypes = "name" | "age"
// P in = keyofで取得した各要素をinで一つずつ取り出し、Pとして扱う
// T[P] = PをTに代入

// 自作も可能
type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};

type OptionalProfile = Optional<Profile>
// type OptionalProfile = {
//   name?: string | null | undefined;
//   age?: number | null | undefined;
// }