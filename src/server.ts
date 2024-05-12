import express from "express";
import router from "./routes/index";
// const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});