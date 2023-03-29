import type { GetMealById } from "@/abstracts/service";
import { Meal } from "@/models";
import { NotFoundError } from "@/errors";
import { mealsRepository } from "@/repositories";

const getMealById: GetMealById = async (id) => {
  const meal = await mealsRepository.getById(id);

  if (!meal) {
    throw new NotFoundError("Meal not found");
  }

  return meal;
};

export default getMealById;
