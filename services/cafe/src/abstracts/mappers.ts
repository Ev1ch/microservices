import type { Cuisine, Ingredient, Meal } from '@/models';
import type { ICuisine, IIngredient, IMeal } from '@/domain';

export type MapCuisineToJson = (cuisine: Cuisine) => ICuisine;

export type MapJsonToCuisine = (cuisine: ICuisine) => Cuisine;

export type MapIngredientToJson = (ingredient: Ingredient) => IIngredient;

export type MapJsonToIngredient = (ingredient: IIngredient) => Ingredient;

export type MapMealToJson = (meal: Meal) => IMeal;

export type MapJsonToMeal = (meal: IMeal) => Meal;
