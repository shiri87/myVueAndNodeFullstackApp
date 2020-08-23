const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const config = require("../config/config")

const db = {} // empty object/ variable

const sequelize = new Sequelize(
  config.db.database, //get from config file / centralized location
  config.db.user,
  config.db.password,
  config.db.options
)

fs.readdirSync(__dirname) // read through current directory folder and set them up to be used by sequelize
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize)
    db[model.name] = model
  }) //This import method takes the file path
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
