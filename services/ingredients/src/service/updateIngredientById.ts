import type { UpdateIngredientById } from '@/abstracts/service';
import type { IIngredientDTO } from '@/domain';
import { ingredientsRepository } from '@/repositories';
import { mapJsonToIngredient } from '@/mappers';
import { NotFoundError } from '@/errors';
import sendMessage from './kafka';

const updateIngredientById: UpdateIngredientById = async (
  id: string,
  ingredientDTO: IIngredientDTO
) => {
  const ingredientExists = await ingredientsRepository.getById(id);

  if (!ingredientExists) {
    throw new NotFoundError('Cuisine does not exist');
  }

  const ingredientEntity = mapJsonToIngredient(ingredientDTO);
  const ingredient = await ingredientsRepository.updateById(
    id,
    ingredientEntity
  );

  sendMessage('UPDATED', ingredient);
  return ingredient;
};

export default updateIngredientById;
