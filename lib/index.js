"use strict";

var _inquirer = _interopRequireDefault(require("inquirer"));

var _longest = _interopRequireDefault(require("longest"));

var _rightPad = _interopRequireDefault(require("right-pad"));

var _searchAndLoad = _interopRequireDefault(require("./searchAndLoad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async () => {
  const _ref = await (0, _searchAndLoad.default)(),
        config = _ref.config;

  let questions = config.questions;
  questions = questions.map(question => {
    if (!question.choices) return question; // longestにわたす配列作成

    const choiceNameArray = question.choices.map(choice => choice.name); // nameとdescriptionを結合させるため

    const combine = question.choices.map(choice => {
      // choicesで一番長いnameの文字数を計算 + 余白
      const choiceNameLength = (0, _longest.default)(choiceNameArray).length + 1;
      return {
        name: `${(0, _rightPad.default)(choice.name, choiceNameLength)} ${choice.description}`,
        value: choice.name
      };
    }); // eslint-disable-next-line no-param-reassign

    question.choices = combine;
    return question;
  });

  _inquirer.default.prompt(questions).then(answers => {
    console.log(answers.prefix);
  });
})();