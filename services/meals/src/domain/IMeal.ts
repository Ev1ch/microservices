import type IEntity from "./IEntity";

export default interface IMeal extends IEntity<string> {
  name: string;
}

export interface IDTO extends Omit<IMeal, "id"> {}
