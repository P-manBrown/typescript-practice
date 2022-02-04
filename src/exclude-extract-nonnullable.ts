export {}

// Exclude<ユニオンtypes, 除外する型>
type DebugType = () => void
type SomeTypes = string | number | DebugType
type FunctionType = Exclude<SomeTypes, string | number>
type NonFunctionType = Exclude<SomeTypes, DebugType>
// 関数を除外する場合
type TypeExcludingFunction = Exclude<SomeTypes, Function>

// Extract<ユニオンtypes, 抽出する型>
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>
type TypeExcludingFunctionByExtract = Extract<SomeTypes, Function>

// nullとundefinedを除外する
type NullableTypes = string | number | null | undefined
type NonNullableTypes = NonNullable<NullableTypes>