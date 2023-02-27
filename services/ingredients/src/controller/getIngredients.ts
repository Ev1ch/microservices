import type { GetIngredients } from "@/abstracts/controller";
import service, { getIngredients } from "@/service";
import { mapIngredientToJson } from "@/mappers";

const getCountries: GetIngredients = async (req, res, next) => {
  try {
    const ingredients = await service.getIngredients();
    const json = ingredients.map(mapIngredientToJson);
    res.json(json);
  } catch (error) {
    next(error);
  }
};

export default getIngredients;
