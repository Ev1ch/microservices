import { getEntitiesLogger } from '@/common/logging';

export const TOPIC_TO_LOGGER_MAP = {
  meals: getEntitiesLogger('Meals'),
  cuisines: getEntitiesLogger('Cuisines'),
  ingredients: getEntitiesLogger('Ingredients'),
  default: getEntitiesLogger('Default'),
};

export const TOPICS_TO_SUBSCRIBE = ['meals', 'cuisines', 'ingredients'];
