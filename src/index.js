const { initialize, createCommitConfig } = require('./common');

async function czfe() {
  const prompter = async (cz, commit) => {
    const {
      config: { questions },
    } = await initialize();

    const getConfig = () => questions.map(createCommitConfig);
    const config = await getConfig();
    const answers = await cz.prompt(config);
    commit(`${answers.prefix}${answers.scope}${answers.emoji}${answers.body}`);
  };

  return { prompter };
}

module.exports = czfe;
