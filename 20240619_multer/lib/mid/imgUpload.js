const multer = require("multer");
const path = require("path")

//exports에 메서드 생성
// multer 함수로 객체를 생성
exports.upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, "upload/")
    },
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname)
      const filename = path.basename(file.originalname, ext) + "_" + Date.now() + ext;
      done(null, filename)
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 }
})
