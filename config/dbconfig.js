module.exports = {
  development: {
    username: "root",
    password: null,
    database: "database_test",
    host: "localhost",
    dialect: "sqlite",
    storage: "./server/data/db.development.sqlite" // path is from the main folder
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {           // have sql server up and running before running the app
    username: "root",     // username & password are defined in the sql server
    password: "root",
    database: "db_test",  // here goes the name of your db on the mysql server
    host: "localhost",    // host & port are defined in the sql server
    post: 12345,
    dialect: "mysql"
  }
}