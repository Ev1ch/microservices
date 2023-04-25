import type { ICuisine } from '@/domain';

export default class Cuisine implements ICuisine {
  public id!: string;

  public name!: string;
}
