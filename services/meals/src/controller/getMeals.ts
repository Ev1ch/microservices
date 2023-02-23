import type { GetMeals } from '@/abstracts/controller';
import service from '@/service';
import { mapMealToJson } from '@/mappers';

const getMeals: GetMeals = async (req, res, next) => {
  try {
    const meals = await service.getMeals();
    const json = meals.map(mapMealToJson);
    res.json(json);
  } catch (error) {
    next(error);
  }
};

export default getMeals;
