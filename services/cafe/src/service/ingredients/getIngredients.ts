import type { GetIngredients } from '@/abstracts/service';
import type { IIngredient } from '@/domain';
import { mapJsonToIngredient } from '@/mappers';
import api from './api';
import { INGREDIENTS_ROUTES } from './routes';

const getIngredients: GetIngredients = async () => {
  const response = await api.get<IIngredient[]>(INGREDIENTS_ROUTES.root);
  return response.data.map(mapJsonToIngredient);
};

export default getIngredients;
