import type { GetCuisines } from '@/abstracts/service';
import { cuisinesRepository } from '@/repositories';

const getCuisines: GetCuisines = async () => {
  const cuisines = await cuisinesRepository.getAll();
  return cuisines;
};

export default getCuisines;
