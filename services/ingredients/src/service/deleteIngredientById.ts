import type { DeleteIngredientById } from '@/abstracts/service';
import NotFoundError from '@/errors/NotFoundError';
import { ingredientsRepository } from '@/repositories';
import sendMessage from './kafka';

const deleteIngredient: DeleteIngredientById = async (id: string) => {
  const ingredient = await ingredientsRepository.getById(id);

  if (!ingredient) {
    throw new NotFoundError('Ingredient does not exist');
  }

  await ingredientsRepository.deleteById(id);

  sendMessage('DELETED', ingredient);
};

export default deleteIngredient;
