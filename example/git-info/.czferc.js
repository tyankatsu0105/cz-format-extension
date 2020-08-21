  /**
   * @typedef {{input1: string;input2: string;}} Answers
   */

/** @type import('cz-format-extension').Config<Answers> */
module.exports = {
  questions({inquirer, gitInfo}) {
    const ui = new inquirer.ui.BottomBar();
    ui.log.write(`============================`);
    ui.log.write(`Current Branch is ${gitInfo.branch}`);
    ui.log.write(`============================`);
    ui.log.write(``);

    return [
      {
        type: 'input',
        name: 'input1',
      },
      {
        type: 'input',
        name: 'input2',
      },
    ]

  },
  commitMessage({answers, gitInfo}) {
    process.on('unhandledRejection', (reason) => {
      console.error(reason);
      process.exit(1);
    });
    
    if(gitInfo.branch === 'master') {
      throw new Error("Can't commit to master branch")
    }
    return `${answers.input1}\n${answers.input2}`
  }
}