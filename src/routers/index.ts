import { Router } from "express";
import { IRoutes } from "../types/routes";
export class MainRoute implements IRoutes {
  public router = Router();
}
