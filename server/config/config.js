require("dotenv").config();

module.exports = {
  development: {
    username: "vibhoragrawal",
    password: null,
    database: "node_js_project",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
