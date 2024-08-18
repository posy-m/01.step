const path = require("path");

// npx webpack을 실행하면
// webpack 의존성에서 webpack.config.js 파일을 찾고 import해서 속성값을 사용해서 컴파일 한다.
// 키값은 동일하게 해줘야한다.
module.exports = {
  entry: "./src/index.js",
  mode: "development", // 개발모드
  output: {
    filename: "bundle.js", // react에서 빌드를 하면 dist폴어데 bundel. js로 작성이 된다.
    // 생성할 경로
    path: path.join(__dirname, "dist")
  }
}