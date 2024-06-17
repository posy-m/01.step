const mysql = require("./config")

const posts = {
  initTable: async () => {
    try {
      // 테이블이 존재하는지 조회
      const result = await mysql.query("select * from posts")
    } catch (err) {
      //에러가 발생하면 테이블이 없다. 그러니 만들어줘라.
      await mysql.query("create table posts(id INT AUTO_INCREMENT PRIMARY KEY, title varchar(20), content VARCHAR(100))");

    }
  },

  //글의 전체 내용을 조회
  gitViewPostAll: async () => {
    try {
      const [result] = await mysql.query("select * from posts")
    } catch (err) {
      console.log("err : modes select post table");
    }
  },

  //선택글 조회
  gitSelectIndexPost: async (id) => {
    try {
      const [[result]] = await mysql.query("selet * from posts WHERE id =?", [id]);
      return result
    } catch (err) {
      console.log("err : models select index post table");
    }
  },

  //글 추가 메서드 
  setPostContent: async (title, content) => {
    try {
      // insert into posts(title, content)values(?,?)", [title, content] : 테이블 값 추가
      await mysql.query("insert into posts(title, content)values(?,?)", [title, content])
    } catch (err) {
      console.log("err : models insert post table");
    }
  }
}

posts.initTable();

posts.gitSelectIndexPost(2);

module.exports = posts;