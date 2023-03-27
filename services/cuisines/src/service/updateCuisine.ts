import type { UpdateCuisine } from "@/abstracts/service";
import { cuisinesRepository } from "@/repositories";
import type { ICuisineDTO } from "@/domain";
import { Cuisine } from "@/models";
import { mapJsonToCuisine } from "@/mappers";

const updateCuisine: UpdateCuisine = async (
  id: string,
  cuisineDTO: ICuisineDTO
) => {
  const cuisineEntity = mapJsonToCuisine(cuisineDTO);
  const cuisine = await cuisinesRepository.updateById(id, cuisineEntity);
  return cuisine;
};

export default updateCuisine;
