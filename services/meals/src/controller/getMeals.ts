import type { GetMeals } from '@/abstracts/controller';
import service from '@/service';
import { mapMealToJson } from '@/mappers';
import { setError, setResponse } from '@/common/responses';

const getMeals: GetMeals = async (req, res, next) => {
  try {
    const meals = await service.getMeals();
    const json = meals.map(mapMealToJson);
    setResponse(res, next, json);
  } catch (error) {
    setError(res, next, error);
  }
};

export default getMeals;
