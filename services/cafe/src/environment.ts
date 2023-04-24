import { cleanEnv, num, str } from 'envalid';
import 'dotenv/config';

const environment = cleanEnv(process.env, {
  API_VERSION: str(),
  API_PREFIX: str(),
  PORT: num(),
  CUISINES_API_URL: str(),
  INGREDIENTS_API_URL: str(),
  MEALS_API_URL: str(),
});

export default environment;
