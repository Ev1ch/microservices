import type { DeleteIngredientById } from "@/abstracts/service";
import NotFoundError from "@/errors/NotFoundError";
import { ingredientsRepository } from "@/repositories";

const deleteIngredient: DeleteIngredientById = async (id: string) => {
  const cuisine = await ingredientsRepository.getById(id);

  if (!cuisine) {
    throw new NotFoundError("Cuisine does not exist");
  }

  await ingredientsRepository.deleteById(id);
};

export default deleteIngredient;
