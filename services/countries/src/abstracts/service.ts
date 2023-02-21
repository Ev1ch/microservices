import type { Country } from '@/models';

export type GetCountries = () => Promise<Country[]>;

export type GetCountryById = (id: string) => Promise<Country>;
