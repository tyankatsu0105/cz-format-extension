/**
 * @typedef {{list: string;}} Answers
 */

/** @type import('cz-format-extension').Config<Answers> */
module.exports = {
  questions({ inquirer }) {
    return [
      {
        type: "list",
        name: "list",
        choices: [
          "choice A",
          "choice B",
          "choice C",
          new inquirer.Separator(),
          "choice D",
        ],
      },
    ];
  },
  commitMessage({ answers }) {
    return answers.list;
  },
};
