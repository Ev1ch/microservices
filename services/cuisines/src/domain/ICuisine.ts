import type IEntity from "./IEntity";

export default interface ICuisine extends IEntity<string> {
  name: string;
}

export interface ICuisineDTO extends Omit<ICuisine, "id"> {}
