import type { Cuisine } from "@/models";
import type { ICuisineDTO } from "@/domain";

export type GetCuisines = () => Promise<Cuisine[]>;

export type GetCuisineById = (id: string) => Promise<Cuisine | null>;

export type AddCuisine = (cuisine: ICuisineDTO) => Promise<Cuisine | null>;

export type DeleteCuisine = (id: string) => Promise<void | null>;

export type UpdateCuisine = (
  id: string,
  cuisine: ICuisineDTO
) => Promise<Cuisine | null>;
