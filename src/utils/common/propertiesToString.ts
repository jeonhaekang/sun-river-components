export const propertiesToString = (properties: readonly string[]) => {
  const addBacktick = properties.reduce((result, property) => {
    return [...result, `\`${property}\``];
  }, [] as string[]);

  return addBacktick.join(", ");
};
