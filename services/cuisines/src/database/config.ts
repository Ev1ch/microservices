import type { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

import { Cuisine } from "@/models";
import environment from "@/environment";

const config: PostgresConnectionOptions = {
  type: "postgres",
  database: "cuisine",
  username: "postgres",
  password: "postgres_password",
  entities: [Cuisine],
  logging: ["error"],
};

export default config;
