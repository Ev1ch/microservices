import type { AddMeal } from "@/abstracts/controller";
import service from "@/service";
import { setError, setResponse } from "@/common/responses";

const addMeal: AddMeal = async (req, res, next) => {
  try {
    const mealDTO = req.body;
    const meal = await service.addMeal(mealDTO);
    setResponse(res, next, meal);
  } catch (error) {
    setError(res, next, error);
  }
};

export default addMeal;
