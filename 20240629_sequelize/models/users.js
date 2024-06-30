const Sequelize = require("sequelize")

class User extends Sequelize.Model {
  static init(_sequelizeobj) {
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        unique: true
      },
      age: {
        type: Sequelize.INTEGER
      },
      msg: {
        type: Sequelize.TEXT
      }
    }, {
      sequelize: _sequelizeobj,
      timestamps: true,
      underscored: false,
      modelName: "user",
      tableName: "users",
      paranoid: false,
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci"
    })
  }
  static associte(db) {
    db.Users.hasMany(db.Posts, { foreingKey: "user_name", sourceKey: "name" })
  }
}

module.exports = User;