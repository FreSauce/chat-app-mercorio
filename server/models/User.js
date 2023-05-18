const Sequelize = require("sequelize");
const db = require("./db");

const User = db.define("user", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  photoUrl: {
    type: Sequelize.STRING,
  },
  isOnline: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = User;
