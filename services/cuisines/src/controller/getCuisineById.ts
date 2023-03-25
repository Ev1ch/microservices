import type { GetCuisineById } from "@/abstracts/controller";
import service from "@/service";
import { mapCuisineToJson } from "@/mappers";
import { ApiError } from "@/errors";
import HttpCode from "@/common/HttpCode";
import { setError, setResponse } from "@/common/responses";

const getCuisineById: GetCuisineById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cuisine = await service.getCuisineById(id);

    if (!cuisine) {
      throw new ApiError("Cuisine not found", HttpCode.NOT_FOUND);
    }

    const json = mapCuisineToJson(cuisine);
    setResponse(res, next, json);
  } catch (error) {
    setError(res, next, error);
  }
};

export default getCuisineById;
