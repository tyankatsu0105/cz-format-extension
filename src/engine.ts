import * as inquirer from "inquirer";
import getRepoInfo from "git-repo-info";
import { initialize } from "./util";
import { CZ, Commit } from "./types";

export const engine = () => {
  const { config } = initialize();
  const gitInfo = getRepoInfo();

  const prompter = (cz: CZ, commit: Commit) => {
    if (config.questions === undefined)
      throw new Error("Could not find questions.");

    return cz
      .prompt(config.questions({ inquirer, gitInfo }))
      .then((answers) => {
        if (config.commitMessage === undefined)
          throw new Error("Could not find commitMessage.");

        const commitMessage = config.commitMessage({ answers, gitInfo });

        if (typeof commitMessage !== "string")
          throw new Error("commitMessage should return string.");

        commit(commitMessage);
      });
  };

  return {
    prompter,
  };
};
