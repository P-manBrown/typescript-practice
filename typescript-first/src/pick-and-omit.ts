export {}

type DetailedProfile = {
  name: string
  height: number
  weight: number
}

type SimpleProfile = Pick<DetailedProfile, "name" | "weight">

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type SmallProfile = Omit<DetailedProfile, "height">
// type SmallProfile = {
//   name: string;
//   weight: number;
// }

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// K = height
// keyof T = "name" | "height" | "weight"
// Exclude<keyof T, K> = Exclude<"name" | "height" | "weight", "height"> = "name", "weight"
type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit
