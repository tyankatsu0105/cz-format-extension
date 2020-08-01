module.exports = {
  questions(inquirer) {
    return [
      {
        type: "list",
        name: "prefix",
        message: "Select prefix",
        choices: [
          {
            name: 'aaaaaaaaaaaaa',
            value: 'value',
          }
        ]
      },
    ],
  },
  commitMessage(answers) {
    return answers.prefix
  }
}