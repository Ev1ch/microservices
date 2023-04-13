import type { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

import { Meal } from "@/models";
import environment from "@/environment";

const config: PostgresConnectionOptions = {
  type: "postgres",
  database: "meals",
  username: "postgres",
  password: "postgres_password",
  entities: [Meal],
  logging: ["error"],
};

export default config;
