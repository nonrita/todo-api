import { PrismaClient, Todo } from "@prisma/client";
import { Request, Response } from "express";

export class TodoController {
  prisma: PrismaClient = new PrismaClient();

  getAll = async (req: Request, res: Response) => {
    const users: Todo[] = await this.prisma.todo.findMany();
    res.json(users);
  };
}
