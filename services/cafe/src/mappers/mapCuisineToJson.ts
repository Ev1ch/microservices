import type { MapCuisineToJson } from '@/abstracts/mappers';

const mapCuisineToJson: MapCuisineToJson = (cuisine) => {
  return {
    id: cuisine.id,
    name: cuisine.name,
  };
};

export default mapCuisineToJson;
