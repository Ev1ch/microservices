import type { GetCuisineById } from '@/abstracts/service';
import { Cuisine } from '@/models';

const getCuisineById: GetCuisineById = async (id) => {
  return new Cuisine();
};

export default getCuisineById;
