import type { GetCountries } from '@/abstracts/service';
import { Country } from '@/models';

const getCountries: GetCountries = async () => {
  return [new Country()];
};

export default getCountries;
