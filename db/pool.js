require("dotenv").config();
const {Pool} = require("pg");


module.exports = new Pool({
    host: process.env.HOST | "localhost",
    user: process.env.DB_USER | "nghia",
    database: process.env.DB_NAME | "message_db",
    password: process.env.DB_PASSWORD | "Nghia1998",
    port: process.env.DB_PORT | 5432,
    connectionString: `postgresql://nghia:Nghia1998@localhost:5432/message_db`
});