import fs from "fs";

export const upPath = (path) => {
  const data = path.split("/");
  const filtered = data.filter((el, i) => i !== data.length - 1).join("/");
  const isExists = fs.existsSync(filtered);
  if (isExists) {
    return filtered;
  } else {
    console.log("Operation failed. U cant go up upper disk");
  }
};

export const cdPath = (dir, chunk) => {
  const slicedChunk = chunk.slice(3);
  const newPath = `${dir}/${slicedChunk}`;
  const isExists = fs.existsSync(newPath);
  const stats = isExists && fs.statSync(newPath);
  const isDirectory = isExists && stats.isDirectory();
  if (isExists && isDirectory) {
    return newPath;
  }
  if (isExists && !isDirectory) {
    console.log("This is file, please choose a folder");
  } else {
    console.log("Operation failed");
  }
  console.log(` ✶ ✷ ✸ You are currently in ${dir} ✶ ✷ ✸`);
};
