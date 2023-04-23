import type { PrimitiveKey } from '@/common/types';

export default interface IEntity<T extends PrimitiveKey> {
  id: T;
}
