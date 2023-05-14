import type { PrimitiveKey } from '@/common/types';

export enum EntityEvents {
  CREATED = 'CREATED',
  DELETED = 'DELETED',
  UPDATED = 'UPDATED',
  GETED = 'GETED'
}

export default interface IEntity<T extends PrimitiveKey> {
  event: EntityEvents;
  date: Date;
  data:{
    id: T;
  }
}
