import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { Meal } from '@/models';
import environment from '@/environment';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  url: environment.DB_URL,
  entities: [Meal],
  logging: ['error'],
};

export default config;
