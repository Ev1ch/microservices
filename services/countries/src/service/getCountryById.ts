import type { GetCountryById } from '@/abstracts/service';
import { Country } from '@/models';

const getCountryById: GetCountryById = async (id) => {
  return new Country();
};

export default getCountryById;
