export const isCdCommand = (chunk) => {
  return chunk.slice(0, 2) === "cd";
};

export const isCatCommand = (chunk) => {
  return chunk.slice(0, 3) === "cat";
};

export const isAddCommand = (chunk) => {
  return chunk.slice(0, 3) === "add";
};

export const isRenameCommand = (chunk) => {
  return chunk.slice(0, 2) === "rn";
};

export const isCopyCommand = (chunk) => {
  return chunk.slice(0, 2) === "cp";
};
export const isDeleteCommand = (chunk) => {
  return chunk.slice(0, 2) === "rm";
};

export const isMoveCommand = (chunk) => {
  return chunk.slice(0, 2) === "mv";
};

export const isUpCommand = (chunk) => {
  return chunk.slice(0, 2) === "up";
};

export const isLsCommand = (chunk) => {
  return chunk.slice(0, 2) === "ls";
};

export const isExitCommand = (chunk) => {
  return chunk.slice(0, 5) === ".exit";
};
