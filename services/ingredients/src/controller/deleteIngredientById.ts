import type { DeleteIngredientsById } from "@/abstracts/controller";
import service from "@/service";
import { setError, setResponse } from "@/common/responses";

const deleteIngredient: DeleteIngredientsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.deleteIngredient(id);
    setResponse(res, next);
  } catch (error) {
    setError(res, next, error);
  }
};

export default deleteIngredient;
