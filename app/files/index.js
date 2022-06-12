import fs from "fs";
import path from "path";
import proccess from "process";
export const getFiles = async (dir) => {
  await fs.readdir(dir, (err, files) => {
    console.log(files);
    console.log(`✶ ✷ ✸ You are currently in ${dir} ✶ ✷ ✸`);
    if (err) {
      console.log(err);
    }
  });
};

export const getAppPath = () => {
  const path = process.cwd();
  return path;
};
