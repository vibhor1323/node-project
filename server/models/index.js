const { Sequelize, DataTypes } = require("sequelize");
const configJson = require("../config/config.js");

const env = process.env.NODE_ENV ? process.env.NODE_ENV : "development";

const config = configJson[env];

console.log("this is the environment: ", env);

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected to discover`);
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require("./user.js")(sequelize, DataTypes);

module.exports = db;
