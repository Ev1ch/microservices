import type { DeleteCuisine } from "@/abstracts/controller";
import service from "@/service";
import { mapCuisineToJson } from "@/mappers";
import { ApiError } from "@/errors";
import HttpCode from "@/common/HttpCode";
import { setError, setResponse } from "@/common/responses";
import { UpdateCuisine } from "@/abstracts/controller";
import mapJsonToCuisine from "@/mappers/mapJsonToCuisine";

const updateCuisine: UpdateCuisine = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cuisineDTO = req.body;
    const cuisine = await service.updateCuisine(id, cuisineDTO);
    setResponse(res, next, cuisine);
  } catch (error) {
    console.log(error);
    setError(res, next, error);
  }
};

export default updateCuisine;
