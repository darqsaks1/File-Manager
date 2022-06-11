import fs from "fs";

export const getFiles = async (dir) => {
  await fs.readdir(dir, (err, files) => {
    console.log(files);
    console.log(`✶ ✷ ✸ You are currently in ${dir} ✶ ✷ ✸`);
    if (err) {
      console.log(err);
    }
  });
};
