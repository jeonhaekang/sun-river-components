export type ObjectKeys<K extends Record<PropertyKey, unknown>> = Exclude<
  keyof K,
  symbol
>;

export const getObjectKeys = <T extends Record<PropertyKey, unknown>>(
  obj: T
): Array<ObjectKeys<T>> => {
  return Object.keys(obj) as Array<ObjectKeys<T>>;
};

export const getObjectValues = <T extends Record<PropertyKey, unknown>>(
  obj: T
): Array<T[ObjectKeys<T>]> => {
  return Object.values(obj) as Array<T[ObjectKeys<T>]>;
};

export const getObjectEntries = <T extends Record<PropertyKey, unknown>>(
  obj: T
): Array<[ObjectKeys<T>, T[ObjectKeys<T>]]> => {
  return Object.entries(obj) as Array<[ObjectKeys<T>, T[ObjectKeys<T>]]>;
};
