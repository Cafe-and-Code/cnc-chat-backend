import { Router } from "express";
import { IRoutes } from "@/interfaces/routes.interface";
import { AuthRoute } from "./auth.route";

export class MainRoute implements IRoutes {
  public router: Router = Router();
  public authRouter = new AuthRoute();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use("/auth", () => this.authRouter);
  }
}
