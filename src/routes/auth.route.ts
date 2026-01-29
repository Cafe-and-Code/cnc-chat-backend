import { Router } from "express";
import { IRoutes } from "@/interfaces/routes.interface";
import { AuthController } from "@/controllers/auth.controller";

export class AuthRoute implements IRoutes {
  public path = "/auth";
  public router: Router = Router();
  public auth = new AuthController();

  constructor() {
    console.log("✅ AuthRoute constructor called");
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/register", this.auth.register.bind(this.auth));
    this.router.post("/login", this.auth.login.bind(this.auth));
    this.router.post("/logout", this.auth.logout.bind(this.auth));
    this.router.post("/refreshToken", this.auth.refreshToken.bind(this.auth));
  }
}
