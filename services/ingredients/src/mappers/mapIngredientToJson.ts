import type { MapIngredientToJson } from '@/abstracts/mappers';

const mapIngredientToJson: MapIngredientToJson = (ingredient) => {
    return {
      id: ingredient.id,
      name: ingredient.name,
    };
  };
  
  export default mapIngredientToJson;