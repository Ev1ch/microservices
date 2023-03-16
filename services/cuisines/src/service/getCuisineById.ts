import type { GetCuisineById } from '@/abstracts/service';
import { cuisinesRepository } from '@/repositories';

const getCuisineById: GetCuisineById = async (id) => {
  const cuisine = await cuisinesRepository.getById(id);
  return cuisine;
};

export default getCuisineById;
