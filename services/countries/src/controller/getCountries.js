import * as service from '../service/index.js';
import { mapCountryToJson } from '../mappers/index.js';

export default async function getCountries(req, res, next) {
  try {
    const countries = await service.getCountries();
    const json = countries.map(mapCountryToJson);
    res.json(json);
  } catch (error) {
    next(error);
  }
}
