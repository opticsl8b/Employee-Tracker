require("dotenv").config();
const mysql = require("mysql2");

const connection= mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employees_tracker",
  });


module.exports = connection;
