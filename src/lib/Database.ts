import mysql from "mysql2/promise";
export const pool = mysql.createPool({
  host: 'mysql',
  user: 'root',
  password: 'pass',
  database: 'todo',
});