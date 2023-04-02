import type { MapJsonToCuisine } from '@/abstracts/mappers';
import { Cuisine } from '@/models';

const mapJsonToCuisine: MapJsonToCuisine = (cuisine) => {
  const mappedCuisine = new Cuisine();
  mappedCuisine.name = cuisine.name;
  return mappedCuisine;
};

export default mapJsonToCuisine;
