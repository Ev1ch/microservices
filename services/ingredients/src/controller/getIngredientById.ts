import type { GetIngredientById } from '@/abstracts/controller';
import service from '@/service';
import { mapIngredientToJson } from '@/mappers';
import { setError, setResponse } from '@/common/responses';

const getIngredientById: GetIngredientById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ingredient = await service.getIngredientById(id);
    const json = mapIngredientToJson(ingredient);
    setResponse(res, next, json);
  } catch (error) {
    setError(res, next, error);
  }
};

export default getIngredientById;
