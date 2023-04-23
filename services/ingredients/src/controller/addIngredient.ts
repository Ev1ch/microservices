import type { AddIngredient } from "@/abstracts/controller";
import service from "@/service";
import { setError, setResponse } from "@/common/responses";

const addIngredient: AddIngredient = async (req, res, next) => {
  try {
    const ingredientDTO = req.body;
    const ingredient = await service.addIngredient(ingredientDTO);
    setResponse(res, next, ingredient);
  } catch (error) {
    setError(res, next, error);
  }
};

export default addIngredient;
