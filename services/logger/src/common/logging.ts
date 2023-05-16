import type { IEntityMessage } from '@/domain';

export const getEntitiesLogger =
  (entities: string) => (message: IEntityMessage) => {
    console.log(
      `[${new Date().toISOString()}] ${entities} -> ${
        message.event
      }: ${JSON.stringify(message.data)} | ${message.date}`
    );
  };
