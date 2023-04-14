export const getProperties = (properties: readonly string[]) => {
  return properties.reduce(
    (result, property) => `${result}\`${property}\`, `,
    ""
  );
};
