import type { GetCuisines } from '@/abstracts/service';
import { CuisinesRepository } from '@/repositories';

const repository = new CuisinesRepository();

const getCuisines: GetCuisines = async () => {
  const cuisines = await repository.getAll();
  return cuisines;
};

export default getCuisines;
