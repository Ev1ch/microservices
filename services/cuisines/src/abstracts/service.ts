import type { Cuisine } from "@/models";

export type GetCuisines = () => Promise<Cuisine[]>;

export type GetCuisineById = (id: string) => Promise<Cuisine | null>;

export type addCuisine = (name: string) => Promise<Cuisine | null>;
