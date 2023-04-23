import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { Ingredient } from '@/models';
import environment from '@/environment';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  url: environment.DB_URL,
  entities: [Ingredient],
  logging: ['error'],
};

export default config;
