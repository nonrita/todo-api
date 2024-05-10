import express from "express";
import router from "./routes/index";
// const mysql = require('mysql2');
const app = express();
const port = 3000;

// const connection = mysql.createConnection({
//   host: 'mysql',
//   user: 'root',
//   password: 'pass',
//   database: 'todo',
// });

// connection.connect((err: string) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('success');
// });

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});