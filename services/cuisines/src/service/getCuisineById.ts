import type { GetCuisineById } from '@/abstracts/service';
import { NotFoundError } from '@/errors';
import { cuisinesRepository } from '@/repositories';

const getCuisineById: GetCuisineById = async (id) => {
  const cuisine = await cuisinesRepository.getById(id);

  if (!cuisine) {
    throw new NotFoundError('Cuisine not found');
  }

  return cuisine;
};

export default getCuisineById;
