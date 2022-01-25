import axios from "axios"

export {}
// any型は特定の型を指定しない場合に使用する
// サーバーから返されるデータの型推論はany型
// 実際にはデータの中身を確認し型を明確に指定する必要がある
let url: string = "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123"

axios.get(url).then(function(res) {
  interface Article {
    id: number
    title: string
    description: string
  }
  let data: Article[] = res.data
  // data = [
  //   {
  //     id: 1,
  //     description: "description"
  //   }
  // ]
  // error TS2741: Property 'title' is missing in type '{ id: number; description: string; }' but required in type 'Article'.
  console.log(data)
})
