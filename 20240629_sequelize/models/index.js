const Sequelize = require("sequelize");
const config = require("./config");
const Users = require("./users");
const Posts = require("./posts");

const _sequelizeobj = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev)

const db = {};
db.sequelize = _sequelizeobj;
db.Users = Users;
db.Posts = Posts;

Users.init(_sequelizeobj)
Posts.init(_sequelizeobj)

Users.associte(db)
Posts.associte(db)

_sequelizeobj.sync({ force: false }).then(async () => {
  console.log("연결 성공");

  // User 테이블 매핑 객체
  // mysql문 =>  create : insert into user (name, age, msg) valuse("minji", 20 , "하이여")
  Users.create({
    name: "minji",
    age: 20,
    msg: "하잉"
  })

  await Posts.create({
    content: "0001"
  })

  // 여러개 조회
  // mysql문 => select * from posts where id=1;
  const datas = await Posts.findAll({ where: { content: 1 } });
  const data = datas.reduce((acc, el) => { acc.push(el.dataValues); return acc }, [])

  // const data = await Posts.findOne({where : {id : 1}});

  // CRUD 중에서 U
  await Posts.update({
    content: "456"
  },
    { where: { id: 3 } });

  // CURD 중에서 D
  await Posts.destroy({ where: { id: 1 } })


}).catch((err) => {
  console.log("연결 실패..", err);
})

module.exports = db