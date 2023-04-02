import type { UpdateCuisineById } from '@/abstracts/controller';
import service from '@/service';
import { setError, setResponse } from '@/common/responses';

const updateCuisine: UpdateCuisineById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cuisineDTO = req.body;
    const cuisine = await service.updateCuisineById(id, cuisineDTO);
    setResponse(res, next, cuisine);
  } catch (error) {
    setError(res, next, error);
  }
};

export default updateCuisine;
