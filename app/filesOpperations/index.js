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
          console.log("________________________________________");
          console.log(" ");
          console.log(data.toString());
          console.log("________________________________________");
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
      console.log(`Well, file ${oldFile} was renamed to ${newFile}`);
      console.log(` ✶ ✷ ✸ You are currently in ${dir} ✶ ✷ ✸`);
    } else {
      console.log(
        "Operation failed. You can get file name from ls command list. Relative path. Path for destination - absolute  Ex: /Users/artemstatuta/Desktop/Work/ NODE_BASIC_RS/File-Manager/"
      );
    }
  } catch (error) {
    console.log(error, "Operation failed");
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

  if (isExists) {
    fs.copyFile(
      oldFile,
      `${res.substring(0, res.length - 1)}/${updatedChunk[0]}`,
      (err) => {
        if (err) throw err;
      }
    );
    console.log("Successfully. The file was copied");
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
      console.log(`The file ${newPath} was delited`);
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
