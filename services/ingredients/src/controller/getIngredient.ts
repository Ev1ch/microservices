import type { GetIngredientById } from "@/abstracts/controller";
import service from "@/service";
import { mapIngredientToJson } from "@/mappers";

const getIngredient: GetIngredientById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ingredient = await service.getIngredientById(id);
    const json = mapIngredientToJson(ingredient);
    res.json(json);
  } catch (error) {
    next(error);
  }
};

export default getIngredient;
