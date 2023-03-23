import type { Cuisine } from "@/models";
import type { ICuisine } from "@/domain";

export type MapCuisineToJson = (cuisine: Cuisine) => ICuisine;

export type MapJsonToCuisine = (jsonCuisine: ICuisine) => Cuisine;
