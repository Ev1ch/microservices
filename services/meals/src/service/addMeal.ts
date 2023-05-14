import type { AddMeal } from "@/abstracts/service";
import { mealsRepository } from "@/repositories";
import { mapJsonToMeal } from "@/mappers";
import sendMessage from './kafka';

const addMeal: AddMeal = async (mealDTO) => {
  const mealEntity = mapJsonToMeal(mealDTO);
  const meal = await mealsRepository.add(mealEntity);

  sendMessage('CREATED', meal);
  
  return meal;
};

export default addMeal;
