import { Kafka } from 'kafkajs';

import type { IIngredient } from '@/domain';

const kafka = new Kafka({
  clientId: 'ingredients-service',
  brokers: ['kafka:9092'],
  connectionTimeout: 100000,
  retry: {
    initialRetryTime: 10000,
    retries: 10,
  },
});

const producer = kafka.producer();
function sendMessage(event: string, data: IIngredient) {
  producer.connect().then(() => {
    producer.send({
      topic: 'ingredients',
      messages: [
        {
          value: JSON.stringify({ event: event, date: new Date(), data: data }),
        },
      ],
    });
  });
}

export default sendMessage;
