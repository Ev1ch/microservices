import type { Cuisine } from "@/models";

export type GetCuisines = () => Promise<Cuisine[]>;

export type GetCuisineById = (id: string) => Promise<Cuisine | null>;

export type AddCuisine = (name: string) => Promise<Cuisine | null>;

export type DeleteCuisine = (id: string) => Promise<Cuisine | null>;

export type UpdateCuisine = (id: string) => Promise<Cuisine | null>;
