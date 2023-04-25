export const isJson = (value: unknown) => {
  try {
    JSON.parse(value as string);
    return true;
  } catch {
    return false;
  }
};
