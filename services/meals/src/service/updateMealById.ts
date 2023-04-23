import type { UpdateMealById } from "@/abstracts/service";
import type { IMealDTO } from "@/domain";
import { mealsRepository } from "@/repositories";
import { mapJsonToMeal } from "@/mappers";
import { NotFoundError } from "@/errors";

const updateMeal: UpdateMealById = async (id: string, mealDTO: IMealDTO) => {
  const cuisineExists = await mealsRepository.getById(id);

  if (!cuisineExists) {
    throw new NotFoundError("Cuisine does not exist");
  }

  const mealEntity = mapJsonToMeal(mealDTO);
  const meal = await mealsRepository.updateById(id, mealEntity);
  return meal;
};

export default updateMeal;
