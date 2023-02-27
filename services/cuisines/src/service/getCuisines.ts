import type { GetCuisines } from '@/abstracts/service';
import { Cuisine } from '@/models';

const getCuisines: GetCuisines = async () => {
  return [new Cuisine()];
};

export default getCuisines;
