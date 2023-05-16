import { Kafka } from 'kafkajs';

import { TOPICS_TO_SUBSCRIBE, TOPIC_TO_LOGGER_MAP } from '@/constants/loggers';

const kafka = new Kafka({
  clientId: 'logger-service',
  brokers: ['kafka:9092'],
  connectionTimeout: 100000,
  retry: {
    retries: 10,
  },
});

const consumer = kafka.consumer({ groupId: 'logger' });

async function init() {
  await consumer.connect();

  TOPICS_TO_SUBSCRIBE.forEach(async (topic) => {
    await consumer.subscribe({ topic });
  });

  await consumer.run({
    async eachMessage({ topic, message }) {
      const data = message.value ? JSON.parse(message.value.toString()) : null;

      if (Object.keys(TOPIC_TO_LOGGER_MAP).includes(topic)) {
        TOPIC_TO_LOGGER_MAP[topic as keyof typeof TOPIC_TO_LOGGER_MAP](data);
      } else {
        TOPIC_TO_LOGGER_MAP.default(data);
      }
    },
  });
}

init()
  .then(() => console.log('Logger service started'))
  .catch(console.error);
