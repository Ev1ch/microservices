import type { GetMeals } from '@/abstracts/service';
import { MealsRepository } from '@/repositories';

const repository = new MealsRepository();

const getMeals: GetMeals = async () => {
  const meals = await repository.getAll();
  return meals;
};

export default getMeals;
