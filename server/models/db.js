const Sequelize = require("sequelize");

//initialize in memory sqlite database
const db = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

db.sync({ force: false });
console.log("All models were synchronized successfully.");

module.exports = db;
