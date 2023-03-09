import type IEntity from './IEntity';

export default interface IMeal extends IEntity<string> {
  name: string;
}
