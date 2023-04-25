export enum Service {
  CAFE = 'Cafe',
  CUISINES = 'Cuisines',
  MEALS = 'Meals',
  INGREDIENTS = 'Ingredients',
}

export enum Route {
  ROOT = '/',
  ONE = '/:id',
}

export const SERVICE_TO_ENDPOINT_MAP: Record<Service, string> = {
  [Service.CAFE]: '/cafe',
  [Service.CUISINES]: '/cuisines',
  [Service.MEALS]: '/meals',
  [Service.INGREDIENTS]: '/ingredients',
};
