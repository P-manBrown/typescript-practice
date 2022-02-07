export {}

// 以下に具体的に記述されているプロパティは必須となる
interface Profile {
  name: string
  underTwenty: boolean,
  [index: string]: string | number | boolean
}

// 以上に具体的に記述されているプロパティは初期化する必要がある
let profile: Profile = { 
  name: "Tanaka",
  underTwenty: false 
}

// インデックスシグネチャの記述方法
// { [index: typeForIndex ] typeForValue}

profile.name = "Tanaka"
profile.age = 41
profile.nationality = "Japan"