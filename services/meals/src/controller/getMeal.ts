import type { GetMealById } from '@/abstracts/controller';
import service from '@/service';
import { mapMealToJson } from '@/mappers';

const getMeals: GetMealById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Meal = await service.getMealById(id);
    const json = mapMealToJson(Meal);
    res.json(json);
  } catch (error) {
    next(error);
  }
};

export default getMeals;
