import { RowDataPacket } from "mysql2";

export interface ITodoModel extends RowDataPacket {
  id: number;
  name: string;
}