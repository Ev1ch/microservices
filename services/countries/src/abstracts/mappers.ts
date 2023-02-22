import type { Country } from '@/models';
import type { ICountry } from '@/domain';

export type MapCountryToJson = (country: Country) => ICountry;
