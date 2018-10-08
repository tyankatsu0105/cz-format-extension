"use strict";

const longest = require('longest');

const rightPad = require('right-pad');

const searchAndLoad = require('./searchAndLoad'); // eslint-disable-next-line func-names


const czfe = function () {
  return {
    prompter(cz, commit) {
      const getConfig = async () => {
        const {
          config
        } = await searchAndLoad();
        let {
          questions
        } = config;
        questions = questions.map(question => {
          if (!question.choices) return question; // longestにわたす配列作成

          const choiceNameArray = question.choices.map(choice => choice.name); // nameとdescriptionを結合させるため

          const combine = question.choices.map(choice => {
            // choicesで一番長いnameの文字数を計算 + 余白
            const choiceNameLength = longest(choiceNameArray).length + 1;
            return {
              name: `${rightPad(choice.name, choiceNameLength)} ${choice.description}`,
              value: choice.name
            };
          }); // eslint-disable-next-line no-param-reassign

          question.choices = combine;
          return question;
        });
        return questions;
      };

      getConfig().then(value => {
        cz.prompt(value).then(answers => {
          commit(`${answers.prefix}${answers.scope}${answers.emoji}${answers.body}`);
        });
      });
    }

  };
};

module.exports = czfe;