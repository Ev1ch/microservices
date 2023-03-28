import type { DeleteCuisineById } from '@/abstracts/controller';
import service from '@/service';
import { setError, setResponse } from '@/common/responses';

const deleteCuisine: DeleteCuisineById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.deleteCuisineById(id);
    setResponse(res, next);
  } catch (error) {
    setError(res, next, error);
  }
};

export default deleteCuisine;
