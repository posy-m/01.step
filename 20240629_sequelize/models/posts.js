const Sequelize = require("sequelize")

class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    }, {
      sequelize,
      timestamps: true,
      modelName: "Post",
      tableName: "posts",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci"
    })
  }
  static associte(db) {
    db.Posts.belongsTo(db.Users, { foreingnKey: "user_name", target: " name" })
  }
}

module.exports = Post;