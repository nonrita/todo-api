import express, { RequestHandler, Router, Request, Response } from "express";
import mapRoutes from "./mapRoutes";

const router: Router = express.Router();

mapRoutes(
  router,
  {
    '/test': {
      get: function(req: Request, res: Response){
        res.send("get test")
      },
      '/in': {
        get: function(req: Request, res: Response){
          res.send("get in test")
        },
      },
      '/:id': {
        get: function(req: Request, res: Response){
          res.send(req.params);
        },
      },
    },
    '/test2': {
      get: function(req: Request, res: Response){
        res.send("get test2")
      },
    }
});

export default router;
