import type { MapJsonToIngredient } from "@/abstracts/mappers";
import { Ingredient } from "@/models";

const mapJsonToIngredient: MapJsonToIngredient = (cuisine) => {
  const mappedCuisine = new Ingredient();
  mappedCuisine.name = cuisine.name;
  return mappedCuisine;
};

export default mapJsonToIngredient;
