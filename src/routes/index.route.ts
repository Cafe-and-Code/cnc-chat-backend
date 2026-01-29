import { Router } from "express";
import { IRoutes } from "@/interfaces/routes.interface";
import { AuthRoute } from "./auth.route";

export class MainRoute implements IRoutes {
  public router = Router();
  public authRouter = new AuthRoute();

  constructor() {
    this.defineRoutes.forEach((route) => {
      this.router.use(route.path, route.route);
    });
  }

  private defineRoutes = [
    {
      path: "/auth",
      route: this.authRouter.router,
    },
  ];
}
