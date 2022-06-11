import os from "os";

export const osEOL = async (path) => {
  console.log(JSON.stringify(os.EOL));
  console.log(` ✶ ✷ ✸ You are currently in ${path} ✶ ✷ ✸`);
};

export const osCPUS = async (path) => {
  console.log(os.cpus());
  console.log(` ✶ ✷ ✸ You are currently in ${path} ✶ ✷ ✸`);
};

export const osHOMEDIR = async (path) => {
  console.log(os.homedir());
  console.log(` ✶ ✷ ✸ You are currently in ${path} ✶ ✷ ✸`);
};

export const osUserName = async (path) => {
  const user = os.userInfo();
  console.log(user.username);
  console.log(` ✶ ✷ ✸ You are currently in ${path} ✶ ✷ ✸`);
};

export const osArchitecture = async (path) => {
  console.log(os.arch());
  console.log(` ✶ ✷ ✸ You are currently in ${path} ✶ ✷ ✸`);
};
