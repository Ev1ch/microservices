import type { MapJsonToCuisine } from "@/abstracts/mappers";
import { Cuisine } from "@/models";

const mapJsonToCuisine: MapJsonToCuisine = (ICuisine) => {
  const cuisine = new Cuisine();
  cuisine.name = ICuisine.name;
  return cuisine;
};

export default mapJsonToCuisine;
