import type { ICountry } from '@/domain';

export default class Country implements ICountry {
  public id: string = 'id';
  public name: string = 'name';
}
