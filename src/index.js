const { initialize, createCommitConfig } = require('./common');

function czfe() {
  return {
    prompter(cz, commit) {
      const getConfig = async () => {
        const {
          config: { questions },
        } = await initialize();

        return questions.map(createCommitConfig);
      };

      getConfig().then(value => {
        cz.prompt(value).then(answers => {
          commit(
            `${answers.prefix}${answers.scope}${answers.emoji}${answers.body}`
          );
        });
      });
    },
  };
}

module.exports = czfe;
