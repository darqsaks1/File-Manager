import fs from "fs";
import crypto from "crypto";
import path from "path";
//node src/hash/calcHash.js

export const calculateHash = async (dir, chunk) => {
  try {
    const updatedChunk = chunk.slice(5);
    const pathForFile = path.join(dir, updatedChunk);
    const isExists = fs.existsSync(pathForFile);
    if (isExists) {
      const fileBuffer = fs.readFileSync(pathForFile);
      const hashSum = crypto.createHash("sha256");
      hashSum.update(fileBuffer);
      const hex = hashSum.digest("hex");
      console.log(hex);
    } else {
      console.log(
        "Operation failed, relative path. Use file name from ls command list, please"
      );
    }
    console.log(` ✶ ✷ ✸ You are currently in ${dir} ✶ ✷ ✸`);
  } catch (error) {
    console.log(error);
  }
};
