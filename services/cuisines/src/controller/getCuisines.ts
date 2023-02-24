import type { GetCuisines } from '@/abstracts/controller';
import service from '@/service';
import { mapCuisineToJson } from '@/mappers';

const getCuisines: GetCuisines = async (req, res, next) => {
  try {
    const cuisines = await service.getCuisines();
    const json = cuisines.map(mapCuisineToJson);
    res.json(json);
  } catch (error) {
    next(error);
  }
};

export default getCuisines;
