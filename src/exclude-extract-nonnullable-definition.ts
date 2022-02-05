export {}

// type Exclude<T, U> = T extends U ? never : T;
type MyExclude = 
( string extends string | number ? never : string )  // never
| ( number extends string | number ? never : number )  // never
| ( DebugType extends string | number ? never : DebugType )  // DebugType
type MyFunctionType = MyExclude

type DebugType = () => void
type SomeTypes = string | number | DebugType
type FunctionType = Exclude<SomeTypes, string | number>


// Extract<ユニオンtypes, 抽出する型>
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>

// nullとundefinedを除外する
type NullableTypes = string | number | null | undefined
type NonNullableTypes = NonNullable<NullableTypes>