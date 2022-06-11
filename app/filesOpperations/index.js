import fs from "fs";
import path from "path";
import { deleteFile } from "../utils/index.js";

/// *** cat 'file name'
//  u can got file name  from "ls" command. Path - u currenly path from terminal
export const catFile = async (dir, chunk) => {
  const slicedChunk = chunk.slice(4);
  const newPath = path.join(dir, slicedChunk);
  const isExists = fs.existsSync(newPath);
  try {
    if (isExists) {
      const stream = new fs.createReadStream(path.join(dir, slicedChunk));
      console.log(path.join(dir, slicedChunk));
      stream.on("readable", async () => {
        const data = await stream.read();
        if (data) {
          console.log(
            "ᚕ ᚖ ᚠ ᚡ ᚢ ᚣ ᚤ ᚥ ᚦ ᚧ ᚨ ᚩ ᚪ ᚫ ᚬ ᚭ ᚮ ᚯ ᚰ ᚱ ᚲ ᚳ ᚴ ᚵ ᚶ ᚷ ᚸ ᚹ ᚺ ᚻ ᚼ ᚽ ᚾ ᚿ"
          );
          console.log("________________________________________");
          console.log(data.toString());
          console.log("________________________________________");
          console.log(
            "ᛃ ᛄ ᛅ ᛆ ᛇ ᛈ ᛉ ᛊ ᛋ ᛏ ᛑ ᛒ ᛓ ᛔ ᛕ ᛖ ᛗ ᛘ ᛚ ᛛ ᛜ ᛝ ᛞ ᛟ ᛠ ᛡ ᛢ ᛣ ᛤ ᛥ ᛦ"
          );
          console.log(` ✶ ✷ ✸ ✶ ✷ ✸ You are currently in ${dir} ✶ ✷ ✸ ✶ ✷ ✸`);
        }
      });
    } else {
      console.log("Operation failed");
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

/// *** add 'file name'
//  u can got path  from "ls" command
export const addFile = async (dir, chunk) => {
  const content = "hello world!";
  const slicedChunk = chunk.slice(4);
  const newPath = path.join(dir, slicedChunk);

  try {
    let writeStream = fs.createWriteStream(newPath);
    writeStream.write(content, "base64");
    writeStream.on("finish", () => {
      console.log("The file was succesfully saved!");
      console.log(` ✶ ✷ ✸ ✶ ✷ ✸ You are currently in ${dir} ✶ ✷ ✸ ✶ ✷ ✸`);
    });

    writeStream.end();
  } catch (error) {
    console.log("Operation failed");
    throw error;
  }
};

/// *** rename 'filename' 'filename2'
//  u can got old file name  from "ls" command
export const renameFile = async (dir, chunk) => {
  const updatedChunk = chunk.slice(3).split(" ");
  const oldFile = path.join(dir, updatedChunk[0]);
  const newFile = path.join(dir, updatedChunk[1]);
  const isExists = fs.existsSync(oldFile);
  try {
    if (isExists) {
      const stream = fs.createReadStream(oldFile);
      const write = fs.createWriteStream(newFile);
      stream.pipe(write);
      stream.once("end", function () {
        stream.destroy();
        deleteFile(oldFile);
      });
    } else {
      console.log(
        "Operation failed. You can get file name from ls command list. Relative path. Path for destination - absolute  Ex: /Users/artemstatuta/Desktop/Work/ NODE_BASIC_RS/File-Manager/"
      );
    }
  } catch (error) {
    throw error;
  }
};

export const copyFile = async (dir, chunk) => {
  const updatedChunk = chunk.slice(3).split(" ");
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
  const isExsistsNew = fs.existsSync(res);
  if (isExists && isExsistsNew) {
    fs.copyFile(
      oldFile,
      `${res.substring(0, res.length - 1)}/${updatedChunk[0]}`,
      (err) => {
        if (err) throw err;
        console.log(
          "Operation failed. You can get file name from ls command list. Relative path. Path for destination - absolute  Ex: /Users/artemstatuta/Desktop/Work/ NODE_BASIC_RS/File-Manager/"
        );
      }
    );
  } else {
    console.log(
      "Operation failed. You can get file name from ls command list. Relative path. Path for destination - absolute  Ex: /Users/artemstatuta/Desktop/Work/ NODE_BASIC_RS/File-Manager/"
    );
  }
  console.log(` ✶ ✷ ✸ ✶ ✷ ✸ You are currently in ${dir} ✶ ✷ ✸ ✶ ✷ ✸`);
};

export const deleteFileCommand = async (dir, chunk) => {
  const slicedChunk = chunk.slice(3);
  const newPath = path.join(dir, slicedChunk);
  const isExists = fs.existsSync(newPath);
  if (isExists) {
    fs.unlink(newPath, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  } else {
    console.log(
      "Operation failed. You can get file name from ls command list. Relative path. Path for destination - absolute  Ex: /Users/artemstatuta/Desktop/Work/ NODE_BASIC_RS/File-Manager/"
    );
  }
  console.log(` ✶ ✷ ✸ ✶ ✷ ✸ You are currently in ${dir} ✶ ✷ ✸ ✶ ✷ ✸`);
};

export const moveFile = async (dir, chunk) => {
  const updatedChunk = chunk.slice(3).split(" ");
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
  if (isExists) {
    fs.copyFile(
      oldFile,
      `${res.substring(0, res.length - 1)}/${updatedChunk[0]}`,
      (err) => {
        if (err) throw err;
        console.log("File succsessully redirected");
      }
    );
    fs.unlink(oldFile, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File removed");
    });
  } else {
    console.log(
      "Operation failed. You can get file name from ls command list. Relative path. Path for destination - absolute  Ex: /Users/artemstatuta/Desktop/Work/ NODE_BASIC_RS/File-Manager/"
    );
  }
  console.log(` ✶ ✷ ✸ ✶ ✷ ✸ You are currently in ${dir} ✶ ✷ ✸ ✶ ✷ ✸`);
};
