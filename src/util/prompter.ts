import * as inquirer from "inquirer";

import { Commit, CZ, GitInfo, InternalConfig } from "../types";
import { getGitInfo } from "./gitInfo";

export const executeCommit = (params: {
  commit: Commit;
  config: InternalConfig;
  cz: CZ;
  gitInfo: GitInfo;
}) => {
  if (params.config.questions === undefined)
    throw new Error("Could not find questions.");

  return params.cz
    .prompt(params.config.questions({ gitInfo: params.gitInfo, inquirer }))
    .then((answers) => {
      if (params.config.commitMessage === undefined)
        throw new Error("Could not find commitMessage.");

      const commitMessage = params.config.commitMessage({
        answers,
        gitInfo: params.gitInfo,
      });

      params.commit(commitMessage);
    });
};

export const getPrompter = (config: InternalConfig) => {
  const prompter = (cz: CZ, commit: Commit) =>
    getGitInfo().then(({ gitInfo }) =>
      executeCommit({
        commit,
        config,
        cz,
        gitInfo,
      })
    );

  return {
    prompter,
  };
};
