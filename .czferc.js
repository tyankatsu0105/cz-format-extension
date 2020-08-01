const prefix = [
  {
    name: "feat: A new feature",
    value: "feat"
  },
  {
    name: "fix: A bug fix",
    value: "fix"
  },
  {
    name: "docs: Documentation only changes",
    value: "docs"
  },
  {
    name: "style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
    value: "style"
  },
  {
    name: "refactor: A code change that neither fixes a bug nor adds a feature",
    value: "refactor"
  },
  {
    name: "perf: A code change that improves performance",
    value: "perf"
  },
  {
    name: "test: Adding missing tests or correcting existing tests",
    value: "test"
  },
  {
    name: "build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
    value: "build"
  },
  {
    name: "ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
    value: "ci"
  },
  {
    name: "chore: Other changes that don't modify src or test files",
    value: "chore"
  },
  {
    name: "revert: Reverts a previous commit",
    value: "revert"
  },
]

module.exports = {
  /**
   * @param {import('inquirer').Inquirer} inquirer 
   * @returns {import('inquirer').QuestionCollection}
   */
  questions(inquirer) {
    return [
      {
        type: "list",
        name: "prefix",
        message: "Select prefix",
        choices: prefix
      },
    ]

  },
  /**
   * @typedef {{questionType1: string; questionType2: string}} Answers
   * 
   * @param {Answers} answers
   * @returns {string}
   */
  commitMessage(answers) {
    return `${answers.questionType1}${answers.questionType2}`
  }
}