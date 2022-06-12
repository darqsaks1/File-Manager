export const isHashCommand = (chunk) => {
  return chunk.slice(0, 4) === "hash";
};
