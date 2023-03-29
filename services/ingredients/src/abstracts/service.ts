import type { Ingredient } from "@/models";
import type { IIngredientDTO } from "@/domain";

export type GetIngredients = () => Promise<Ingredient[]>;

export type GetIngredientById = (id: string) => Promise<Ingredient>;

export type AddIngredient = (cuisine: IIngredientDTO) => Promise<Ingredient>;

export type DeleteIngredientById = (id: string) => Promise<void>;

export type UpdateIngredientById = (
  id: string,
  cuisine: IIngredientDTO
) => Promise<Ingredient>;
