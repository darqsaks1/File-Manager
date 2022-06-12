import { stdin, argv } from "process";
import {
  exitCommand,
  getSettings,
  getUserName,
  onRebuildChunk,
} from "./app/utils/index.js";
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
  getSettings(userName, home.start);

  stdin.on("data", (data) => {
    const chunk = onRebuildChunk(data);

    switch (true) {
      case isExitCommand(chunk):
        exitCommand(userName);
        break;
      case isLsCommand(chunk):
        getFiles(home.start);
        break;
      case isUpCommand(chunk):
        const upped = upPath(home.start);
        if (upped) {
          home.start = upped;
        }
        console.log(` ✶ ✷ ✸ You are currently in ${home.start} ✶ ✷ ✸`);
        break;
      case isCdCommand(chunk):
        if (cdPath(home.start, chunk)) {
          home.start = cdPath(home.start, chunk);
        }
        console.log(` ✶ ✷ ✸ You are currently in ${home.start} ✶ ✷ ✸`);
        break;

      case isCatCommand(chunk):
        catFile(home.start, chunk);
        break;
      case isAddCommand(chunk):
        addFile(home.start, chunk);
        break;
      case isRenameCommand(chunk):
        renameFile(home.start, chunk);
        break;
      case isCopyCommand(chunk):
        copyFile(home.start, chunk);
        break;
      case isDeleteCommand(chunk):
        deleteFileCommand(home.start, chunk);
        break;
      case isMoveCommand(chunk):
        moveFile(home.start, chunk);
        break;

      case isEolCommand(chunk):
        osEOL(home.start);
        break;
      case isCPUSCommand(chunk):
        osCPUS(home.start);
        break;
      case isHomeDirCommand(chunk):
        osHOMEDIR(home.start);
        break;
      case isUserNameCommand(chunk):
        osUserName(home.start);
        break;

      case isArchitectureCommand(chunk):
        osArchitecture(home.start);
        break;

      case isHashCommand(chunk):
        calculateHash(home.start, chunk);
        break;

      case isCompressCommand(chunk):
        compressFile(home.start, chunk);
        break;
      case isDecompressCommand(chunk):
        decompressFile(home.start, chunk);
        break;
      default:
        console.log("Invalid input");
    }
  });

  process.on("SIGINT", () => exitCommand(userName));
};

init();
