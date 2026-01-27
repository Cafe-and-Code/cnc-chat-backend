import { Container } from "typedi";
import { NODE_ENV } from "@/configs/env";
import { User } from "@/interfaces/users.interface";
import { AuthService } from "@/services/auth.service";
import { NextFunction, Request, Response } from "express";
export class AuthController {
  public auth = Container.get(AuthService);
  // Register
  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;
      await this.auth.register(userData);
      res.status(201).json({ status: 201, message: "successfully!" });
    } catch (error) {
      res.status(400).json({ status: 400, message: "User data us not valid!" });
      next(error);
    }
  };
  // Login
  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;
      const { userAvailable, accessToken, refreshToken } = await this.auth.login(userData);
      const isProduction = NODE_ENV === "production";
      // Set cookie HttpOnly
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
        path: "/",
        maxAge: 15 * 60 * 1000, // 15 minutes
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });
      res.cookie("isLoggedIn", true, {
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.status(200).json({
        userId: userAvailable.id,
        userRole: "user",
      });
    } catch (error) {
      next(error);
    }
  };
  // Log out
  public logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.clearCookie("accessToken", { path: "/" });
      res.clearCookie("refreshToken", { path: "/" });
      res.clearCookie("isLoggedIn", { path: "/" });
      res.status(200).send({ message: "Logged out successfully." });
    } catch (error) {
      res.status(500).send({ message: "Failed to log out." });
      next(error);
    }
  };
}
