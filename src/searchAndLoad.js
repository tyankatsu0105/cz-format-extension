const cosmiconfig = require('cosmiconfig');

const configFileName = 'czfe';
const explorer = cosmiconfig(configFileName);

export default async function searchAndLoad() {
  const data = await explorer.search();

  // not exist file or contents
  if (!data || !data.config) {
    throw new Error(`${configFileName}.config.js file not found`);
  }

  const { config, filePath } = data;
  return {
    filePath,
    config,
  };
}
