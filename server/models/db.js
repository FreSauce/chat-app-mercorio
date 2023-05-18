const Sequelize = require("sequelize");

//initialize in memory sqlite database
const db = new Sequelize("chatapp", "postgres", "admin123", {
  dialect: "postgres",
  host: "10.99.128.4",
});

//check connection
(async () => {
  try {
    console.log(db);
    await db.authenticate();
    console.log("Connection has been established successfully.");
    db.sync({ force: false });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = db;
