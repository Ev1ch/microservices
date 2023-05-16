import { Kafka } from 'kafkajs';

import type { IMeal } from '@/domain';

const kafka = new Kafka({
  clientId: 'logger-service',
  brokers: ['kafka:9092'],
  connectionTimeout: 100000,
  retry: {
    retries: 10,
  },
});

const consumer = kafka.consumer({ groupId: 'logger' });

const main = async () => {
  await consumer.connect().then(() => console.log('Logger is connected!'));

  await consumer.subscribe({ topic: 'meals' });

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      const data = JSON.parse(message.value!.toString());
      if (topic == 'meals') {
        processMealMessage(data);
      }
    },
  });
};

function processMealMessage(data: IMeal) {
  console.log(
    `[${new Date().toISOString()}] MEAL: -> MEAL: ${JSON.stringify(
      data.data
    )} SUCCESSFULLY ${data.event} AT ${data.date}`
  );
}

main();
