require("dotenv").config();

const mysql2 = require("mysql2");
const dbConnection = mysql2.createPool({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  connectionLimit: 10,
});



// dbConnection.execute("SELECT 'test' AS test", (err, result) => {
//   if (err) {
//     console.error("Database connection failed:", err.message);
//   } else {
//     console.log("Database connected successfully:", result);
//   }
// });

module.exports = dbConnection.promise();
