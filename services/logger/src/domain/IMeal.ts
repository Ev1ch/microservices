import type IEntity from './IEntity';

export default interface IMeal extends IEntity<string> {
  data: {
    id: string;
    name: string;
  }
}
