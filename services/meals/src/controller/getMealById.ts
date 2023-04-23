import type { GetMealById } from '@/abstracts/controller';
import service from '@/service';
import { mapMealToJson } from '@/mappers';
import { setError, setResponse } from '@/common/responses';

const getMealById: GetMealById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const meal = await service.getMealById(id);
    const json = mapMealToJson(meal);
    setResponse(res, next, json);
  } catch (error) {
    setError(res, next, error);
  }
};

export default getMealById;
