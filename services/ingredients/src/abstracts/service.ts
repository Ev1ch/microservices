import type { Ingredient } from "@/models";

export type GetIngredients = () => Promise<Ingredient[]>;

export type GetIngredientById = (id: string) => Promise<Ingredient>;
