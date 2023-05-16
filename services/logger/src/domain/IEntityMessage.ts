export enum EntityEvent {
  CREATED = 'CREATED',
  DELETED = 'DELETED',
  UPDATED = 'UPDATED',
  GOT = 'GOT',
}

export default interface IEntityMessage {
  event: EntityEvent;
  date: Date;
}
