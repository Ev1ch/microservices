import type { GetMealById } from '@/abstracts/controller';
import service from '@/service';
import { mapMealToJson } from '@/mappers';

const getMealById: GetMealById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const meal = await service.getMealById(id);
    const json = mapMealToJson(meal);
    res.json(json);
  } catch (error) {
    next(error);
  }
};

export default getMealById;
