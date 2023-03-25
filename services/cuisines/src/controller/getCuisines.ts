import type { GetCuisines } from "@/abstracts/controller";
import service from "@/service";
import { mapCuisineToJson } from "@/mappers";
import { setResponse, setError } from "@/common/responses";

const getCuisines: GetCuisines = async (req, res, next) => {
  try {
    const cuisines = await service.getCuisines();
    const json = cuisines.map(mapCuisineToJson);

    setResponse(res, next, json);
    console.log("We are in GET all cuisines controller");
  } catch (error) {
    setError(res, next, error);
  }
};

export default getCuisines;
