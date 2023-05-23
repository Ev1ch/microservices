import { Kafka } from 'kafkajs';

import type { IMeal } from '@/domain';

const kafka = new Kafka({
  clientId: 'meals-service',
  brokers: ['kafka:9092'],
  connectionTimeout: 100000,
  retry: {
    initialRetryTime: 10000,
    retries: 10,
  },
});

const producer = kafka.producer();
function sendMessage(event: string, data: IMeal) {
  producer.connect().then(() => {
    producer.send({
      topic: 'meals',
      messages: [
        {
          value: JSON.stringify({ event: event, date: new Date(), data: data }),
        },
      ],
    });
  });
}

export default sendMessage;
