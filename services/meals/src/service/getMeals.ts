import type { GetMeals } from '@/abstracts/service';
import { MealsRepository } from '@/repositories';
import sendMessage from './kafka';

const repository = new MealsRepository();

const getMeals: GetMeals = async () => {
  const meals = await repository.getAll();

  sendMessage('GOT', {id: "-1", name:"all meals"});

  return meals;
};

export default getMeals;
