import type { Meal } from "@/models";
import type { IMealDTO } from "@/domain";

export type GetMeals = () => Promise<Meal[]>;

export type GetMealById = (id: string) => Promise<Meal>;

export type AddMeal = (cuisine: IMealDTO) => Promise<Meal>;

export type DeleteMealById = (id: string) => Promise<void>;

export type UpdateMealById = (id: string, cuisine: IMealDTO) => Promise<Meal>;
