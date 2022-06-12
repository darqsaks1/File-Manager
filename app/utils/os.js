export const isEolCommand = (chunk) => {
  return chunk === "os --EOL";
};

export const isCPUSCommand = (chunk) => {
  return chunk === "os --cpus";
};

export const isHomeDirCommand = (chunk) => {
  return chunk === "os --homedir";
};

export const isUserNameCommand = (chunk) => {
  return chunk === "os --username";
};

export const isArchitectureCommand = (chunk) => {
  return chunk === "os --architecture";
};
