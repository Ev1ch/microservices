import type { GetMealById } from '@/abstracts/service';
import { Meal } from '@/models';

const getMealById: GetMealById = async (id) => {
  return new Meal();
};

export default getMealById;
