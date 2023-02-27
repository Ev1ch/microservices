import type { IIngredient } from '@/domain';

export default class Ingredient implements IIngredient {
  public id: string = 'id';
  public name: string = 'name';
}