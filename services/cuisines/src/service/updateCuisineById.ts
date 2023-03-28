import type { UpdateCuisineById } from '@/abstracts/service';
import type { ICuisineDTO } from '@/domain';
import { cuisinesRepository } from '@/repositories';
import { mapJsonToCuisine } from '@/mappers';

const updateCuisine: UpdateCuisineById = async (
  id: string,
  cuisineDTO: ICuisineDTO,
) => {
  const cuisineExists = await cuisinesRepository.getById(id);

  if (!cuisineExists) {
    throw new Error('Cuisine does not exist');
  }

  const cuisineEntity = mapJsonToCuisine(cuisineDTO);
  const cuisine = await cuisinesRepository.updateById(id, cuisineEntity);
  return cuisine;
};

export default updateCuisine;
