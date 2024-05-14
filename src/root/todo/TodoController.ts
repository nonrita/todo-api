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

  create = async (req: Request, res: Response) => {
    const title: string = req.body.title;
    const text: string = req.body.text;

    const todo: Todo = await this.prisma.todo.create({
      data: { title, text },
    });

    res.status(200).json(todo);
  };

  update = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const title: string | undefined = req.body.title;
    const text: string | undefined = req.body.text;
    const completed: boolean | undefined = req.body.completed;

    const todo: Todo = await this.prisma.todo.update({
      where: {
        id
      },
      data: { title, text, completed },
    });

    res.status(200).json(todo);
  };

  delete = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);

    const todo: Todo = await this.prisma.todo.delete({
      where: {
        id,
      },
    });

    res.status(200).json(todo);
  };
}
