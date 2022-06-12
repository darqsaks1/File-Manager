export const isCompressCommand = (chunk) => {
  return chunk.slice(0, 8) === "compress";
};

export const isDecompressCommand = (chunk) => {
    return chunk.slice(0, 10) === "decompress";

};
