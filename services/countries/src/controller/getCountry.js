import * as service from '../service/index.js';
import { mapCountryToJson } from '../mappers/index.js';

export default async function getCountries(req, res, next) {
  try {
    const { id } = req.params;
    const country = await service.getCountryById(id);
    const json = mapCountryToJson(country);
    res.json(json);
  } catch (error) {
    next(error);
  }
}
