import type { GetIngredients } from '@/abstracts/controller';
import service from '@/service';
import { mapIngredientToJson } from '@/mappers';
import { setError, setResponse } from '@/common/responses';

const getIngredients: GetIngredients = async (req, res, next) => {
  try {
    const ingredients = await service.getIngredients();
    const json = ingredients.map(mapIngredientToJson);
    setResponse(res, next, json);
  } catch (error) {
    setError(res, next, error);
  }
};

export default getIngredients;
