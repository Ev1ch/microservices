import type { GetIngredients } from '@/abstracts/service';
import { Ingredient } from '@/models';

const getCountries: GetIngredients = async () => {
  return [new Ingredient()];
};

export default getCountries;