import { Router } from "express";
import { IRoutes } from "@/interfaces/routes.interface";
import { AuthController } from "@/controllers/auth.controller";

export class AuthRoute implements IRoutes {
  public router = Router();
  public auth = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/register", this.auth.register);
    this.router.post("/login", this.auth.login);
    this.router.post("/logout", this.auth.logout);
    this.router.post("/refreshToken", this.auth.refreshToken);
  }
}
