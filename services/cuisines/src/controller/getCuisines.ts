import type { GetCuisines } from "@/abstracts/controller";
import service from "@/service";
import { mapCuisineToJson } from "@/mappers";
import { setResponse, setError } from "@/common/responses";
import { ApiError } from "@/errors";
import HttpCode from "@/common/HttpCode";

const getCuisines: GetCuisines = async (req, res, next) => {
  try {
    const cuisines = await service.getCuisines();
    const json = cuisines.map(mapCuisineToJson);

    if (!cuisines) {
      throw new ApiError("There is no cuisines", HttpCode.NOT_FOUND);
    }

    setResponse(res, next, json);
    console.log("We are in GET all cuisines controller");
  } catch (error) {
    setError(res, next, error);
  }
};

export default getCuisines;
