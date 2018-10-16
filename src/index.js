const { initialize, createCommitConfig } = require('./common');

function czfe() {
  const prompter = (cz, commit) =>
    new Promise(async (resolve, reject) => {
      const {
        config: { questions },
      } = await initialize();
      const getConfig = () => questions.map(createCommitConfig);

      try {
        const config = getConfig();
        const answers = await cz.prompt(config).catch(e => reject(e));
        resolve(
          commit(
            `${answers.prefix}${answers.scope}${answers.emoji}${answers.body}`
          )
        );
      } catch (e) {
        reject(e);
      }
    });

  return { prompter };
}

module.exports = czfe;
