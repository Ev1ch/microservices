import type { Meal } from "@/models";
import type { IMeal } from "@/domain";

export type MapMealToJson = (Meal: Meal) => IMeal;

export type MapJsonToMeal = (cuisine: IMeal) => Meal;
