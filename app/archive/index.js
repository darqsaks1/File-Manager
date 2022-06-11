import zlib from "zlib";
import fs from "fs";
import path from "path";

export const compressFile = async (dir, chunk) => {
  try {
    const updatedChunk = chunk.slice(9).split(" ");
    let res = "";
    let oldFile = path.join(dir, updatedChunk[0]);
    let newFile = path.join(updatedChunk[1]);
    const isExists = fs.existsSync(oldFile);
    if (updatedChunk.length > 2) {
      updatedChunk.forEach((item, index) => {
        if (index !== 0) {
          res += `${item} `;
        }
      });
    } else {
      res = newFile;
    }
    const archive = updatedChunk[0].split(".");
    if (isExists) {
      const stream = fs.createReadStream(path.join(oldFile));
      const write = fs.createWriteStream(
        path.join(res.substring(0, res.length - 1), `${archive[0]}.gz`)
      );
      stream.pipe(zlib.createGzip()).pipe(write);
    } else {
      console.log(
        "Operation failed. You can get file name from ls command list. Relative path. Path for destination - absolute  Ex: /Users/artemstatuta/Desktop/Work/ NODE_BASIC_RS/File-Manager/"
      );
    }
    console.log(` ✶ ✷ ✸ ✶ ✷ ✸ You are currently in ${dir} ✶ ✷ ✸ ✶ ✷ ✸`);
  } catch (error) {
    console.log("Operation failed");
  }
};

export const decompressFile = async (dir, chunk) => {
  try {
    const updatedChunk = chunk.slice(11).split(" ");
    let res = "";
    let oldFile = path.join(dir, updatedChunk[0]);
    let newFile = path.join(updatedChunk[1]);
    const isExists = fs.existsSync(oldFile);
    if (updatedChunk.length > 2) {
      updatedChunk.forEach((item, index) => {
        if (index !== 0) {
          res += `${item} `;
        }
      });
    } else {
      res = newFile;
    }
    const isArchive = updatedChunk[0].split(".").includes("gz");
    const archive = updatedChunk[0].split(".");
    if (isExists && isArchive) {
      const stream = fs.createReadStream(path.join(oldFile));
      const write = fs.createWriteStream(
        path.join(res.substring(0, res.length - 1), `${archive[0]}.txt`)
      );
      stream.pipe(zlib.createUnzip()).pipe(write);
    } else {
      console.log(
        "Operation failed. You can get file name from ls command list. Relative path. File must be with .gz. Path for destination - absolute  Ex: /Users/artemstatuta/Desktop/Work/ NODE_BASIC_RS/File-Manager/"
      );
    }
    console.log(` ✶ ✷ ✸ ✶ ✷ ✸ You are currently in ${dir} ✶ ✷ ✸ ✶ ✷ ✸`);
  } catch (error) {
    console.log("Operation failed");
  }
};
