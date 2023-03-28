import type { Cuisine } from '@/models';
import type { ICuisineDTO } from '@/domain';

export type GetCuisines = () => Promise<Cuisine[]>;

export type GetCuisineById = (id: string) => Promise<Cuisine>;

export type AddCuisine = (cuisine: ICuisineDTO) => Promise<Cuisine>;

export type DeleteCuisineById = (id: string) => Promise<void>;

export type UpdateCuisineById = (
  id: string,
  cuisine: ICuisineDTO,
) => Promise<Cuisine>;
