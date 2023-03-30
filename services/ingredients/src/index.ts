import express from "express";
import bodyParser from "body-parser";

import environment from "@/environment";
import database from "@/database";
import { INGREDIENTS_ROOT } from "@/routes";
import initRouter from "@/router";
import { dataMiddleware, errorMiddleware } from "@/middlewares";

const app = express();

app.use(bodyParser.json());
app.use(INGREDIENTS_ROOT, initRouter());
app.use(errorMiddleware, dataMiddleware);

database
  .initialize()
  .then(() => {
    app.listen(environment.PORT, () => {
      console.log(`Server is listening on port ${environment.PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
