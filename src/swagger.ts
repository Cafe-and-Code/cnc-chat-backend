import yaml from "yamljs";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { Request, Response } from "express";

const userSpec = yaml.load("./src/docs/user.yaml");

export const SwaggerDocs = (app: express.Application) => {
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(null, {
      explorer: true, // bật chọn definition
      swaggerOptions: {
        urls: [{ url: "/swagger/user.json", name: "User API" }],
      },
    }),
  );

  //Docs in JSON format
  app.use("/swagger/user.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(userSpec);
  });
};
