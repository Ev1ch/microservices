import type { GetCuisineById } from '@/abstracts/service';
import { cuisinesRepository } from '@/repositories';

const getCuisineById: GetCuisineById = async (id) => {
  const cuisine = await cuisinesRepository.getById(id);

  if (!cuisine) {
    throw new Error('Cuisine not found');
  }

  return cuisine;
};

export default getCuisineById;
