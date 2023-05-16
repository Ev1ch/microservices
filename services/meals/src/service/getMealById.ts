import type { GetMealById } from '@/abstracts/service';
import { NotFoundError } from '@/errors';
import { mealsRepository } from '@/repositories';
import sendMessage from './kafka';

const getMealById: GetMealById = async (id) => {
  const meal = await mealsRepository.getById(id);

  if (!meal) {
    throw new NotFoundError('Meal not found');
  }

  sendMessage('GOT', meal);

  return meal;
};

export default getMealById;
