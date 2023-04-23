import type { Ingredient } from "@/models";
import type { IIngredient } from "@/domain";

export type MapIngredientToJson = (Ingredient: Ingredient) => IIngredient;

export type MapJsonToIngredient = (cuisine: IIngredient) => Ingredient;
