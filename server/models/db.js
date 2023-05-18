const Sequelize = require("sequelize");

var db;
if (process.env.PRODUCTION == true) {
  db = new Sequelize("chatapp", "postgres", "admin123", {
    dialect: "postgres",
    host: "10.99.128.4",
  });
} else {
  db = new Sequelize(
    "postgres://admin:PSgmrBY3g9YQLKbamZt90tmFpZ6RddbJ@dpg-chj0lq5269v2e2cp5elg-a.oregon-postgres.render.com/chatapp_w50p?ssl=true"
  );
}

module.exports = db;
