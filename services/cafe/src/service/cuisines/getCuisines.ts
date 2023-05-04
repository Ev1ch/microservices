import type { GetCuisines } from '@/abstracts/service';
import type { ICuisine } from '@/domain';
import { mapJsonToCuisine } from '@/mappers';
import api from './api';
import { CUISINES_ROUTES } from './routes';

const getCuisines: GetCuisines = async () => {
  const response = await api.get<ICuisine[]>(CUISINES_ROUTES.root);
  return response.data.map(mapJsonToCuisine);
};

export default getCuisines;
