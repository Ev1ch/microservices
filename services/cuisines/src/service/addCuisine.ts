import type { AddCuisine } from "@/abstracts/service";
import { Cuisine } from "@/models";
import { ICuisineDTO } from "@/domain";
import { cuisinesRepository } from "@/repositories";
import { mapJsonToCuisine } from "@/mappers";

const addCuisine: AddCuisine = async (cuisineDTO: ICuisineDTO) => {
  const instance = mapJsonToCuisine(cuisineDTO);
  const cuisine = await cuisinesRepository.add(instance);
  return cuisine;
};

export default addCuisine;
