import type { AddCuisine } from '@/abstracts/service';
import { cuisinesRepository } from '@/repositories';
import { mapJsonToCuisine } from '@/mappers';

const addCuisine: AddCuisine = async (cuisineDTO) => {
  const cuisineEntity = mapJsonToCuisine(cuisineDTO);
  const cuisine = await cuisinesRepository.add(cuisineEntity);
  return cuisine;
};

export default addCuisine;
