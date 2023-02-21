import type { GetCountries } from '@/abstracts/controller';
import service from '@/service';
import { mapCountryToJson } from '@/mappers';

const getCountries: GetCountries = async (req, res, next) => {
  try {
    const countries = await service.getCountries();
    const json = countries.map(mapCountryToJson);
    res.json(json);
  } catch (error) {
    next(error);
  }
};

export default getCountries;
