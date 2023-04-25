import type { GetMeals } from '@/abstracts/service';
import type { IMeal } from '@/domain';
import { mapJsonToMeal } from '@/mappers';
import api from './api';
import { MEALS_ROUTES } from './routes';

const getMeals: GetMeals = async () => {
  const response = await api.get<IMeal[]>(MEALS_ROUTES.root);
  return response.data.map(mapJsonToMeal);
};

export default getMeals;
