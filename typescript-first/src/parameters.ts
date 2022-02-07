export {}

const debugProfile = (name: string, age: number) => {
  console.log({ name, age })
}

debugProfile("Tanaka", 32)

// 関数の引数の型を取り出す
type Profile = Parameters<typeof debugProfile>

const profile: Profile =  ["Takahashi", 12]

debugProfile(...profile)

// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any 
  ? P 
  : never;

  