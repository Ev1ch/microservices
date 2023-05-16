import { Kafka } from 'kafkajs';

import type { IMealMessage } from '@/domain';

const kafka = new Kafka({
  clientId: 'logger-service',
  brokers: ['kafka:9092'],
  connectionTimeout: 100000,
  retry: {
    retries: 10,
  },
});

const consumer = kafka.consumer({ groupId: 'logger' });

function handleMealMessage(message: IMealMessage) {
  console.log(
    `[${new Date().toISOString()}] Meals --> ${message.event}: ${JSON.stringify(
      message.data
    )} | ${message.date}`
  );
}

async function init() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'meals' });

  await consumer.run({
    async eachMessage({ topic, message }) {
      const data = JSON.parse(message.value!.toString());

      if (topic == 'meals') {
        handleMealMessage(data);
      }
    },
  });
}

init()
  .then(() => console.log('Logger service started'))
  .catch(console.error);
