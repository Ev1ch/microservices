import type { ICuisinesRepository } from '@/abstracts/repositories';
import { Cuisine } from '@/models';
import { runner } from '@/database';
import Repository from './Repository';

export default class CuisinesRepository
  extends Repository<Cuisine, string>
  implements ICuisinesRepository
{
  protected adapter = runner.manager.getRepository(Cuisine);
}

export const cuisinesRepository = new CuisinesRepository();
