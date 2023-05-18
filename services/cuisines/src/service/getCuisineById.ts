import type { GetCuisineById } from '@/abstracts/service';
import { NotFoundError } from '@/errors';
import { cuisinesRepository } from '@/repositories';
import sendMessage from './kafka';

const getCuisineById: GetCuisineById = async (id) => {
  const cuisine = await cuisinesRepository.getById(id);

  if (!cuisine) {
    throw new NotFoundError('Cuisine not found');
  }

  sendMessage('GOT', cuisine);

  return cuisine;
};

export default getCuisineById;
