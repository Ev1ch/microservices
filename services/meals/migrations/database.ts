import { DataSource } from "typeorm";

import Initial1678139321560 from "./1678139321560-Initial";
import "dotenv/config";

const database = new DataSource({
  type: "postgres",
  //url: process.env.DB_URL!,
  database: "meals",
  username: "postgres",
  password: "postgres_password",
  migrations: [Initial1678139321560],
});

export default database;
