import { Router } from "express";
import { IRoutes } from "@/interfaces/routes.interface";
export class MainRoute implements IRoutes {
  public router = Router();
}
