import { Container } from "typedi";
import { User } from "@/interfaces/users.interface";
import { AuthService } from "@/services/auth.service";
import { NextFunction, Request, Response } from "express";

export class AuthController {
  public auth = Container.get(AuthService);
}
