import type { GetIngredientById } from '@/abstracts/service';
import { NotFoundError } from '@/errors';
import { ingredientsRepository } from '@/repositories';
import sendMessage from './kafka';

const getIngredientById: GetIngredientById = async (id) => {
  const ingredient = await ingredientsRepository.getById(id);

  if (!ingredient) {
    throw new NotFoundError('Cuisine not found');
  }

  sendMessage('GOT', ingredient);

  return ingredient;
};

export default getIngredientById;
