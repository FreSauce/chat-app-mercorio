const Sequelize = require("sequelize");

var db;
if (process.env.PRODUCTION == "true") {
  db = new Sequelize("chatapp", "postgres", "admin123", {
    dialect: "postgres",
    host: "10.99.128.4",
  });
} else {
  db = new Sequelize(process.env.SQL_DEVELOPMENT_URL);
}

module.exports = db;
