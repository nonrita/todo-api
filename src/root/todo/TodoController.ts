import { PrismaClient, Todo } from "@prisma/client";
import { Request, Response } from "express";

export class TodoController {
  prisma: PrismaClient = new PrismaClient();

  getAll = async (req: Request, res: Response) => {
    const todos: Todo[] = await this.prisma.todo.findMany();
    res.json(todos);
  };

  findById = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const todo: Todo | null = await this.prisma.todo.findUnique({
      where: {
        id,
      },
    });
    if (todo) {
      res.status(200).json(todo);
    } else {
      res
        .status(500)
        .json({ message: `${id}のIDのTodoは見つかりませんでした` });
    }
  };
}
