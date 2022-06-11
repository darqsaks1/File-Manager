import { stdin, argv } from "process";
import { getUserName, onRebuildChunk } from "./app/utils/index.js";
import {
  isCdCommand,
  isCatCommand,
  isAddCommand,
  isRenameCommand,
  isCopyCommand,
  isDeleteCommand,
  isMoveCommand,
  isUpCommand,
  isLsCommand,
  isExitCommand,
} from "./app/utils/files.js";
import {
  isEolCommand,
  isCPUSCommand,
  isHomeDirCommand,
  isUserNameCommand,
  isArchitectureCommand,
} from "./app/utils/os.js";
import { getFiles } from "./app/files/index.js";
import { upPath, cdPath } from "./app/folders/index.js";
import {
  addFile,
  catFile,
  copyFile,
  deleteFileCommand,
  moveFile,
  renameFile,
} from "./app/filesOpperations/index.js";
import {
  osArchitecture,
  osCPUS,
  osEOL,
  osHOMEDIR,
  osUserName,
} from "./app/systemOperations/index.js";
import { isHashCommand } from "./app/utils/hash.js";
import { calculateHash } from "./app/hash/index.js";
import { isCompressCommand, isDecompressCommand } from "./app/utils/archive.js";
import { compressFile, decompressFile } from "./app/archive/index.js";

const init = () => {
  const home = { start: process.env.HOME };

  const userName = getUserName(argv);

  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(` ✶ ✷ ✸ You are currently in ${home.start} ✶ ✷ ✸`);

  stdin.on("data", (data) => {
    const chunk = onRebuildChunk(data);

    if (isExitCommand(chunk)) {
      console.log(`\nThank you for using File Manager, ${userName}!`);
      process.exit();
    }

    if (isLsCommand(chunk)) {
      getFiles(home.start);
    }

    if (isUpCommand(chunk)) {
      const upped = upPath(home.start);
      if (upped) {
        home.start = upped;
      }
      console.log(` ✶ ✷ ✸ You are currently in ${home.start} ✶ ✷ ✸`);
    }

    if (isCdCommand(chunk)) {
      if (cdPath(home.start, chunk)) {
        home.start = cdPath(home.start, chunk);
      }
      console.log(` ✶ ✷ ✸ You are currently in ${home.start} ✶ ✷ ✸`);
    }

    if (isCatCommand(chunk)) {
      catFile(home.start, chunk);
    }

    if (isAddCommand(chunk)) {
      addFile(home.start, chunk);
    }

    if (isRenameCommand(chunk)) {
      renameFile(home.start, chunk);
    }

    if (isCopyCommand(chunk)) {
      copyFile(home.start, chunk);
    }

    if (isDeleteCommand(chunk)) {
      deleteFileCommand(home.start, chunk);
    }

    if (isMoveCommand(chunk)) {
      moveFile(home.start, chunk);
    }

    if (isEolCommand(chunk)) {
      osEOL(home.start);
    }
    if (isCPUSCommand(chunk)) {
      osCPUS(home.start);
    }

    if (isHomeDirCommand(chunk)) {
      osHOMEDIR(home.start);
    }

    if (isUserNameCommand(chunk)) {
      osUserName(home.start);
    }

    if (isArchitectureCommand(chunk)) {
      osArchitecture(home.start);
    }

    if (isHashCommand(chunk)) {
      calculateHash(home.start, chunk);
    }
    if (isCompressCommand(chunk)) {
      compressFile(home.start, chunk);
    }
    if (isDecompressCommand(chunk)) {
      decompressFile(home.start, chunk);
    } else {
      console.log("Invalid input");
    }
  });

  process.on("SIGINT", function () {
    console.log(`\nThank you for using File Manager, ${userName}!`);
    process.exit(1);
  });
};

init();
