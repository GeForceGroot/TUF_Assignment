const sequelize = require('sequelize');

// Create a user using and store data of user(sqlite)
let db;

if (process.env.DATABASE_URL) {
  db = new sequelize(process.env.DATABASE_URL)
} else {
  db = new sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/users.db'
  });
}

const Users = db.define('user', {
  id: {
    type: sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: sequelize.DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  perferdCodeLang: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  stdInp: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  },
  sourceCode: {
    type: sequelize.DataTypes.STRING,
    allowNull: false
  }
})
db.sync()

module.exports = {
  db, Users
}