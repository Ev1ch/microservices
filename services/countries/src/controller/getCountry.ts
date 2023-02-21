import type { GetCountryById } from '@/abstracts/controller';
import service from '@/service';
import { mapCountryToJson } from '@/mappers';

const getCountries: GetCountryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const country = await service.getCountryById(id);
    const json = mapCountryToJson(country);
    res.json(json);
  } catch (error) {
    next(error);
  }
};

export default getCountries;
