import type { DeleteCuisineById } from '@/abstracts/service';
import { cuisinesRepository } from '@/repositories';

const deleteCuisine: DeleteCuisineById = async (id: string) => {
  const cuisine = await cuisinesRepository.getById(id);

  if (!cuisine) {
    throw new Error('Cuisine does not exist');
  }

  await cuisinesRepository.deleteById(id);
};

export default deleteCuisine;
