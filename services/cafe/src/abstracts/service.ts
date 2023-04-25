import type { Cuisine, Ingredient, Meal } from '@/models';

export type GetCuisines = () => Promise<Cuisine[]>;

export type GetIngredients = () => Promise<Ingredient[]>;

export type GetMeals = () => Promise<Meal[]>;
