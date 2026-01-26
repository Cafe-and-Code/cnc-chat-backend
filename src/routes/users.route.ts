import { Router } from "express";
import { IRoutes } from "@/interfaces/routes.interface";
export class UserRoute implements IRoutes {
  public path = "/users";
  public router = Router();
}
