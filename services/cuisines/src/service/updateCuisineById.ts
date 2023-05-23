import type { UpdateCuisineById } from '@/abstracts/service';
import type { ICuisineDTO } from '@/domain';
import { cuisinesRepository } from '@/repositories';
import { mapJsonToCuisine } from '@/mappers';
import { NotFoundError } from '@/errors';
import sendMessage from './kafka';

const updateCuisine: UpdateCuisineById = async (
  id: string,
  cuisineDTO: ICuisineDTO
) => {
  const cuisineExists = await cuisinesRepository.getById(id);

  if (!cuisineExists) {
    throw new NotFoundError('Cuisine does not exist');
  }

  const cuisineEntity = mapJsonToCuisine(cuisineDTO);
  const cuisine = await cuisinesRepository.updateById(id, cuisineEntity);

  sendMessage('UPDATED', cuisine);

  return cuisine;
};

export default updateCuisine;
