import type { GetCuisineById } from '@/abstracts/controller';
import service from '@/service';
import { mapCuisineToJson } from '@/mappers';
import { setError, setResponse } from '@/common/responses';

const getCuisineById: GetCuisineById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cuisine = await service.getCuisineById(id);
    const json = mapCuisineToJson(cuisine);
    setResponse(res, next, json);
  } catch (error) {
    setError(res, next, error);
  }
};

export default getCuisineById;
