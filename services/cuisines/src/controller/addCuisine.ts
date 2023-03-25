import { AddCuisine } from "@/abstracts/controller";
import service from "@/service";
import { mapCuisineToJson, mapJsonToCuisine } from "@/mappers";
import { ApiError } from "@/errors";
import HttpCode from "@/common/HttpCode";
import { setError, setResponse } from "@/common/responses";

const addCuisine: AddCuisine = async (req, res, next) => {
  try {
    const cuisineDTO = req.body;
    const cuisineEntity = mapJsonToCuisine(cuisineDTO);
    const cuisine = await service.addCuisine(cuisineEntity);
  } catch (error) {}
};

export default addCuisine;
