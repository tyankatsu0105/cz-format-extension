const cosmiconfig = require('cosmiconfig');
const longest = require('longest');
const rightPad = require('right-pad');

const configFileName = 'czfe';
const explorer = cosmiconfig(configFileName);

async function initialize() {
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

function getMaxLength(array) {
  // longestにわたす配列作成
  const choiceNameArray = array.map(({ name }) => name);
  return longest(choiceNameArray).length + 1;
}

function createCommitConfig(question) {
  if (!question.choices) return question;
  // choicesで一番長いnameの文字数を計算 + 余白
  const maxLength = getMaxLength(question.choices);
  // nameとdescriptionを結合させるため
  const choices = question.choices.map(({ name, description }) => ({
    name: `${rightPad(name, maxLength)} ${description}`,
    value: name,
  }));

  return { ...question, choices };
}

module.exports = {
  initialize,
  createCommitConfig,
};
