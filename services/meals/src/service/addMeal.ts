import type { AddMeal } from "@/abstracts/service";
import { mealsRepository } from "@/repositories";
import { mapJsonToMeal } from "@/mappers";

const addMeal: AddMeal = async (mealDTO) => {
  const mealEntity = mapJsonToMeal(mealDTO);
  const meal = await mealsRepository.add(mealEntity);
  return meal;
};

export default addMeal;
