export {}

// Record<K, T>
// K = ユニオン型

type Prefectures = "Tokyo" | "Chiba" | "Kyoto"

type Covid19InfectionInfo = {
  kanji_name: string
  confirmed_cases: number
}

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: "東京", confirmed_cases: 2000 },
  Chiba: { kanji_name: "千葉", confirmed_cases: 3000 },
  Kyoto: { kanji_name: "京都", confirmed_cases: 3999 },
}



