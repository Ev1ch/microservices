import type IEntityMessage from './IEntityMessage';

export default interface IMealEvent extends IEntityMessage {
  data: {
    id: string;
    name: string;
  };
}
