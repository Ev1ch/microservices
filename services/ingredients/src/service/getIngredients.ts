import type { GetIngredients } from '@/abstracts/service';
import { IngredientsRepository } from '@/repositories';
import sendMessage from './kafka';

const repository = new IngredientsRepository();

const getIngredients: GetIngredients = async () => {
  const ingredients = await repository.getAll();

  sendMessage('GOT', { id: '-1', name: 'all ingredients' });

  return ingredients;
};

export default getIngredients;
