import type { MapJsonToMeal } from "@/abstracts/mappers";
import { Meal } from "@/models";

const mapJsonToMeal: MapJsonToMeal = (meal) => {
  const mappedMeal = new Meal();
  mappedMeal.name = meal.name;
  return mappedMeal;
};

export default mapJsonToMeal;
