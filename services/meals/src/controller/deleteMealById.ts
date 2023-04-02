import type { DeleteMealById } from '@/abstracts/controller';
import service from '@/service';
import { setError, setResponse } from '@/common/responses';

const deleteMeal: DeleteMealById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.deleteMealById(id);
    setResponse(res, next);
  } catch (error) {
    setError(res, next, error);
  }
};

export default deleteMeal;
