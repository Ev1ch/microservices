import type { GetCuisineById } from '@/abstracts/controller';
import service from '@/service';
import { mapCuisineToJson } from '@/mappers';

const getCuisineById: GetCuisineById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cuisine = await service.getCuisineById(id);
    const json = mapCuisineToJson(cuisine);
    res.json(json);
  } catch (error) {
    next(error);
  }
};

export default getCuisineById;
