import type { MapMealToJson } from '@/abstracts/mappers';

const mapMealToJson: MapMealToJson = (Meal) => {
  return {
    id: Meal.id,
    name: Meal.name,
  };
};

export default mapMealToJson;
