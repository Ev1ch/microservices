import type { GetIngredients } from '@/abstracts/service';
import { IngredientsRepository } from '@/repositories';

const repository = new IngredientsRepository();

const getIngredients: GetIngredients = async () => {
  const ingredients = await repository.getAll();
  return ingredients;
};

export default getIngredients;
