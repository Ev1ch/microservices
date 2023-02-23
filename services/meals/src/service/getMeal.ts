import type { GetMeals } from '@/abstracts/service';
import { Meal } from '@/models';

const getMeals: GetMeals = async () => {
  return [new Meal()];
};

export default getMeals;
