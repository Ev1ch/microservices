import { DataSource } from 'typeorm';
import 'reflect-metadata';

import config from './config';

const database = new DataSource(config);

export const runner = database.createQueryRunner();

export default database;
