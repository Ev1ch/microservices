import type { DeleteCuisine } from "@/abstracts/service";
import { cuisinesRepository } from "@/repositories";

const deleteCuisine: DeleteCuisine = async (id: string) => {
  const cuisine = cuisinesRepository.deleteById(id);
};

export default deleteCuisine;
