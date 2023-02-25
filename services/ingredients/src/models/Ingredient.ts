// import type { IMeal } from '@/domain';
import IIngredient from '../domain/IIngredient';

export default class Ingredient implements IIngredient {
  public id: string = 'id';
  public name: string = 'name';
}