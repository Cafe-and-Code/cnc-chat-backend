import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// export const validateTokenHeader = (req: Request, res: Response, next: NextFunction) => {
//   let token = null;
//   const authHeader = req.headers.Authorization || req.headers.authorization;

//   if (typeof authHeader === "string" && authHeader.startsWith("Bearer")) {
//     token = authHeader?.split(" ")[1];
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//       if (err) {
//         res.status(401);
//         throw new Error("User is not authorized");
//       }
//       req.user = decoded.user;
//       next();
//     });
//     if (!token) {
//       res.status(401);
//       throw new Error("User is not authorized or token is missing");
//     }
//   }
// };

export const validateTokenCookie = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.accessToken;
  if (!token) {
    res.status(401);
    throw new Error("User is not authorized or token is missing");
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401);
      throw new Error("User is not authorized");
    }
    // req.user = decoded.user;
    next();
  });
};
