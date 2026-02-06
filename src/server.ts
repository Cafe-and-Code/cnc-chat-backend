import { App } from "@/app";
import { connectDatabase } from "./configs/database";
import { AuthRoute } from "@/routes/auth.route";

(async () => {
  await connectDatabase();

  const app = new App([new AuthRoute()]);
  app.listen();
})();
