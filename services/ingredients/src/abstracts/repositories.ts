import type { IEntity, IIngredient } from '@/domain';
import type { PrimitiveKey } from '@/common/types';

export interface IRepository<T extends IEntity<K>, K extends PrimitiveKey> {
  getAll(): Promise<T[]>;
  getById(id: K): Promise<T | null>;
  add(entity: T): Promise<T>;
  updateById(id: K, entity: T): Promise<T>;
  deleteById(id: K): void;
}

export interface IIngredientsRepository
  extends IRepository<IIngredient, string> {}
