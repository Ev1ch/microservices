import type { DeleteCuisine } from "@/abstracts/controller";
import service from "@/service";
import { mapCuisineToJson } from "@/mappers";
import { ApiError } from "@/errors";
import HttpCode from "@/common/HttpCode";
import { setError, setResponse } from "@/common/responses";

const deleteCuisine: DeleteCuisine = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cuisine = await service.deleteCuisine(id);
    setResponse(res, next, cuisine);
  } catch (error) {
    console.log(error);
    setError(res, next, error);
  }
};

export default deleteCuisine;
