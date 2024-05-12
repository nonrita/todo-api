import { ResultSetHeader } from "mysql2";
import { pool } from "../lib/Database";
import { ITodoModel } from "../models/TodoModel";

export class TodoCollection {
  static getAll(): Promise<ITodoModel[]> {
    return pool
      .query<ITodoModel[]>("select * from test")
      .then(([result, field]) => {
        return result;
      });
  }

  static findBy(where: string, question: any): Promise<ITodoModel[]> {
    return pool
      .query<ITodoModel[]>("select * from test " + where, question)
      .then(([resulet, field]) => {
        return resulet;
      });
  }

  static create(id: number, name: string): Promise<ResultSetHeader> {
    const sql: string = "INSERT INTO `test`(`id`, `name`) VALUES (?, ?)";
    const values = [id, name];
    return pool.query<ResultSetHeader>(sql, values).then(([result, field]) => {
      return result;
    });
  }

  static update(id: number, update_name: string): Promise<ResultSetHeader> {
    const sql: string = "update test set `name` = ? where `id` = ? ";
    const values = [update_name, id];
    return pool.query<ResultSetHeader>(sql, values).then(([result, field]) => {
      console.log(result);
      return result;
    });
  }
}
