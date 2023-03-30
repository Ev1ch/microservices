import type { UpdateMealById } from '@/abstracts/controller';
import service from '@/service';
import { setError, setResponse } from '@/common/responses';

const updateMeal: UpdateMealById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cuisineDTO = req.body;
    const cuisine = await service.updateMealById(id, cuisineDTO);
    setResponse(res, next, cuisine);
  } catch (error) {
    setError(res, next, error);
  }
};

export default updateMeal;
