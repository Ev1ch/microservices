import type { Cuisine } from '@/models';

export type GetCuisines = () => Promise<Cuisine[]>;

export type GetCuisineById = (id: string) => Promise<Cuisine>;
