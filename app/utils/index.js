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

export const getSettings = (user, home) => {
  console.log(`Welcome to the File Manager, ${user}!`);
  console.log("______________________________________");

  console.log(
    ` 
    Settings:  
      ✶ ✷ ✸  path_to_file - you can choose from current base. Check it from ls command.  ✶ ✷ ✸
      ✶ ✷ ✸  path_to_directory - absolute path. For test u can take it from IDE (VC CODE) Left mouse click on file "Copy Path" ✶ ✷ ✸
      ✶ ✷ ✸  my absulute path to 'utils folder' : /Users/artemstatuta/Desktop/Work/ NODE_BASIC_RS/File-Manager/app/utils ✶ ✷ ✸
      ✶ ✷ ✸  example: (MOVE OPPERATION) mv fileToCut.txt /Users/artemstatuta/Desktop/Work/ NODE_BASIC_RS/File-Manager/app/utils ✶ ✷ ✸`
  );
  console.log("______________________________________");

  console.log(`
   ✶ ✷ ✸ You are currently in ${home} ✶ ✷ ✸
   `);
};

export const exitCommand = (name) => {
  console.log(`\nThank you for using File Manager, ${name}!`);
  process.exit();
};
