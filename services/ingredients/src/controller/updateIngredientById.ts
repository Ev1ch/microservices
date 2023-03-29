import type { UpdateIngredientsById } from "@/abstracts/controller";
import service from "@/service";
import { setError, setResponse } from "@/common/responses";

const updateIngredient: UpdateIngredientsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ingredientDTO = req.body;
    const ingredient = await service.updateIngredientById(id, ingredientDTO);
    setResponse(res, next, ingredient);
  } catch (error) {
    setError(res, next, error);
  }
};

export default updateIngredient;
