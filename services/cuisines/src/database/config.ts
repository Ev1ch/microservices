import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { Cuisine } from '@/models';
import environment from '@/environment';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  url: environment.DB_URL,
  entities: [Cuisine],
  logging: ['error'],
};

export default config;
