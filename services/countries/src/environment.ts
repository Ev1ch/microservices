import { cleanEnv, num, str } from 'envalid';
import 'dotenv/config';

const environment = cleanEnv(process.env, {
  API_VERSION: str(),
  API_PREFIX: str(),
  PORT: num(),
});

export default environment;
