import type { AddCuisine } from '@/abstracts/service';
import { cuisinesRepository } from '@/repositories';
import { mapJsonToCuisine } from '@/mappers';
import sendMessage from './kafka';

const addCuisine: AddCuisine = async (cuisineDTO) => {
  const cuisineEntity = mapJsonToCuisine(cuisineDTO);
  const cuisine = await cuisinesRepository.add(cuisineEntity);

  sendMessage('CREATED', cuisine);

  return cuisine;
};

export default addCuisine;
