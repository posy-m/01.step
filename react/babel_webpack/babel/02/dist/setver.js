"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// express 여기서 있다고 가정하에 작성

const app = (0, _express.default)();
app.listen(3000, () => {
  console.log("server on!");
});
