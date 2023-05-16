import { getEntitiesLogger } from '@/common/logging';

export const TOPIC_TO_LOGGER_MAP = {
  meals: getEntitiesLogger('Meals'),
  default: getEntitiesLogger('Default'),
};

export const TOPICS_TO_SUBSCRIBE = ['meals'];
