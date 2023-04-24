import type { GetAll } from '@/abstracts/controller';
import cuisinesService from '@/service/cuisines';
import ingredientsService from '@/service/ingredients';
import mealsService from '@/service/meals';
import { mapCuisineToJson, mapIngredientToJson, mapMealToJson } from '@/mappers';
import { setResponse, setError } from '@/common/responses';

const getAll: GetAll = async (req, res, next) => {
  try {
    const cuisines = await cuisinesService.getCuisines();
    const ingredients = await ingredientsService.getIngredients();
    const meals = await mealsService.getMeals();

    const json = {
      cuisines: cuisines.map(mapCuisineToJson),
      ingredients: ingredients.map(mapIngredientToJson),
      meals: meals.map(mapMealToJson),
    };
    setResponse(res, next, json);
  } catch (error) {
    setError(res, next, error);
  }
};

export default getAll;
