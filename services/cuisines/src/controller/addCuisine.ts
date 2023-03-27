import { AddCuisine } from "@/abstracts/controller";
import service from "@/service";
import { mapCuisineToJson, mapJsonToCuisine } from "@/mappers";
import { ApiError } from "@/errors";
import HttpCode from "@/common/HttpCode";
import { setError, setResponse } from "@/common/responses";
import { json } from "express";

const addCuisine: AddCuisine = async (req, res, next) => {
  console.log("We are in addCuisine controller outside");
  try {
    const cuisineDTO = req.body;
    console.log("We are in addCuisine controller");
    console.log(cuisineDTO);

    const cuisineEntity = mapJsonToCuisine(cuisineDTO);
    console.log(cuisineEntity);
    const cuisine = await service.addCuisine(cuisineEntity);
    console.log(cuisine);

    if (!cuisine) {
      throw new ApiError("Some errors occured", HttpCode.NOT_FOUND);
    }
    setResponse(res, next, cuisine);
  } catch (error) {
    console.log("We are in addCuisine controller error catcher");
    console.log(error);
    setError(res, next, error);
  }
};

export default addCuisine;
