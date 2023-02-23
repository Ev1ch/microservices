import type { MapMealToJson } from '@/abstracts/mappers';

const mapMealToJson: MapMealToJson = (meal) => {
  return {
    id: meal.id,
    name: meal.name,
  };
};

export default mapMealToJson;
