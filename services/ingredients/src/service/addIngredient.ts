import type { AddIngredient } from '@/abstracts/service';
import { ingredientsRepository } from '@/repositories';
import { mapJsonToIngredient } from '@/mappers';
import sendMessage from './kafka';

const addIngredient: AddIngredient = async (ingredientDTO) => {
  const ingredientEntity = mapJsonToIngredient(ingredientDTO);
  const ingredient = await ingredientsRepository.add(ingredientEntity);

  sendMessage('CREATED', ingredient);

  return ingredient;
};

export default addIngredient;
