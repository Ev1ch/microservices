import type { IMeal } from '@/domain';

export default class Meal implements IMeal {
  public id: string = 'id';
  public name: string = 'name';
}
