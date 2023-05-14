import type { GetMeals } from '@/abstracts/service';
import { MealsRepository } from '@/repositories';
import sendMessage from "./kafka"

const repository = new MealsRepository();

const getMeals: GetMeals = async () => {
  const meals = await repository.getAll();

  meals.forEach(meal => {
    sendMessage('GETTED', meal);
  });

  return meals;
};

export default getMeals;
