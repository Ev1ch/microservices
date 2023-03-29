import type { AddIngredient } from "@/abstracts/service";
import { ingredientsRepository } from "@/repositories";
import { mapJsonToIngredient } from "@/mappers";

const addIngredient: AddIngredient = async (ingredientDTO) => {
  const ingredientEntity = mapJsonToIngredient(ingredientDTO);
  const ingredient = await ingredientsRepository.add(ingredientEntity);
  return ingredient;
};

export default addIngredient;
