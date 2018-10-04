"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchAndLoad;

const cosmiconfig = require("cosmiconfig");

const configFileName = "czfe";
const explorer = cosmiconfig(configFileName);

async function searchAndLoad() {
  const data = await explorer.search(); // not exist file or contents

  if (!data || !data.config) {
    throw new Error(`${configFileName} rc file not found`);
  }

  const config = data.config,
        filePath = data.filePath;
  return {
    filePath,
    config
  };
}