import type { AddCuisine } from "@/abstracts/service";
import { Cuisine } from "@/models";
import { ICuisineDTO } from "@/domain";
import { cuisinesRepository } from "@/repositories";

const addCuisine: AddCuisine = async (cuisine: ICuisineDTO) => {
  return null;
};

export default addCuisine;
