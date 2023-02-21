import { Country } from '../models/index.js';

export default async function getCountries() {
  return [new Country()];
}
