import type { GetIngredients } from '@/abstracts/controller';
import service from '@/service';
import { mapIngredientToJson } from '@/mappers';

const getIngredients: GetIngredients = async (req, res, next) => {
  try {
    const ingredients = await service.getIngredients();
    const json = ingredients.map(mapIngredientToJson);
    res.json(json);
  } catch (error) {
    next(error);
  }
};

export default getIngredients;
