import type { Meal } from '@/models';

export type GetMeals = () => Promise<Meal[]>;

export type GetMealById = (id: string) => Promise<Meal>;
