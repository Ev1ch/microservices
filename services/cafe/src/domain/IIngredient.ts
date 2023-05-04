import type IEntity from './IEntity';

export default interface IIngredient extends IEntity<string> {
  name: string;
}
