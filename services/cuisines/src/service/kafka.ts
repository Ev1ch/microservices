import { Kafka } from 'kafkajs';

import type { ICuisine } from '@/domain';

const kafka = new Kafka({
  clientId: 'cuisines-service',
  brokers: ['kafka:9092'],
  connectionTimeout: 100000,
  retry: {
    initialRetryTime: 10000,
    retries: 10,
  },
});

const producer = kafka.producer();
function sendMessage(event: string, data: ICuisine) {
  producer.connect().then(() => {
    producer.send({
      topic: 'cuisines',
      messages: [
        {
          value: JSON.stringify({ event: event, date: new Date(), data: data }),
        },
      ],
    });
  });
}

export default sendMessage;
