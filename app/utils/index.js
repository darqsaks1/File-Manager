import fs from "fs";

export const onRebuildChunk = (data) => {
  return data
    .toString()
    .split("")
    .filter((item) => item !== "\n")
    .join("");
};
export const deleteFile = (file) => {
  fs.unlink(file, function (err) {
    if (err) {
      console.error(err.toString());
    }
  });
};

export const getUserName = (name) => {
  return name
    .filter((item) => item.startsWith("--username="))
    .toString()
    .substring(11);
};
