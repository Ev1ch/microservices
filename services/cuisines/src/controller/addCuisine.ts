import type { AddCuisine } from '@/abstracts/controller';
import service from '@/service';
import { setError, setResponse } from '@/common/responses';

const addCuisine: AddCuisine = async (req, res, next) => {
  try {
    const cuisineDTO = req.body;
    const cuisine = await service.addCuisine(cuisineDTO);
    setResponse(res, next, cuisine);
  } catch (error) {
    setError(res, next, error);
  }
};

export default addCuisine;
