import express from "express";
import bodyParser from "body-parser";

import environment from "@/environment";
import database from "@/database";
import { INGREDIENTS_ROOT } from "@/routes";
import initRouter from "@/router";

const app = express();

app.use(bodyParser.json());
app.use(INGREDIENTS_ROOT, initRouter());

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
