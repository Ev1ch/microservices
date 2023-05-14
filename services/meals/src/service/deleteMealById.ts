import type { DeleteMealById } from "@/abstracts/service";
import NotFoundError from "@/errors/NotFoundError";
import { mealsRepository } from "@/repositories";
import sendMessage from "./kafka"

const deleteMeal: DeleteMealById = async (id: string) => {
  const meal = await mealsRepository.getById(id);

  if (!meal) {
    throw new NotFoundError("Meal does not exist");
  }

  await mealsRepository.deleteById(id);

  sendMessage('DELETED', meal);

};

export default deleteMeal;
