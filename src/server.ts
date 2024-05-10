import express from "express";
import type { Express, Request, Response, RequestHandler } from 'express';
const mysql = require('mysql2');
const app: Express = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'pass',
  database: 'todo',
});

connection.connect((err: string) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('success');
});

app.get('/', (req: Request, res: Response) => {
  connection.query('SELECT * FROM `test`', (err: string, results: any[]) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});