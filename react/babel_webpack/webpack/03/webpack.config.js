const path = require("path")

const HtmlwebpackPlugin = require("html-webpack-plugin");
// HtmlwebpackPlugin : 번들링이 될때 html 생성 설정 속성을 줄 수 있는 플러그인

module.exports = {
  mode: "development",

  entry: "./src/index.js",


  module: {
    rules: [
      {
        // (js|jsx) 둘다 읽는다.
        // 읽을 파일 확장자 js와 jsx
        test: /\.(js|jsx)$/,

        // 읽는 내용에서 제외 시키고 싶은 파일들 혹은 폴더
        exclude: /node_module/,

        // 로더는 바벨
        use: ["babel-loader"],
      }
    ]
  },
  // 사용할 플러그인
  plugins: [
    // html을 생성해줄 플러그인
    // 객체 형태로 한다는것 키값이 동일해야한다.
    new HtmlwebpackPlugin({
      // template : 우리가 번들링 된 곳에 생성할 html 내용을 제공할 파일
      template: "src/index.html",
      // 번들링에서 생성될 html의 이름
      filename: "myIndex.html"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  }
}