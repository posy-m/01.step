const { users, Users } = require("../models")

// CRUD 중C
const user = {
  async create(name, age, msg) {
    try {
      await Users.create({
        name, age, msg
      })
    } catch (error) {
      return error
    }
  },
  // CRUD 중 R
  async userselectAll() {
    try {
      return await Users.findAll();
    } catch (error) {
      return error
    }
  },
  async userSelectName(name, model) {
    try {
      return await Users.findOne({ where: { name }, include: { model } });
    } catch (error) {
      return error
    }
  }
}
module.exports = user;