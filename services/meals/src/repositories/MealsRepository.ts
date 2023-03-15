import type { IMealsRepository } from '@/abstracts/repositories';
import { Meal } from '@/models';
import { runner } from '@/database';
import Repository from './Repository';

export default class MealsRepository
  extends Repository<Meal, string>
  implements IMealsRepository
{
  protected adapter = runner.manager.getRepository(Meal);
}
