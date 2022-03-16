import * as inquirer from "inquirer";
import { getGitInfo } from "../util";
import { CZ, Commit, InternalConfig,GitInfo } from "../types";

const executeCommit = (params: {
  cz: CZ
  commit: Commit
  config: InternalConfig
  gitInfo: GitInfo
}) => {
  if (params.config.questions === undefined)
      throw new Error("Could not find questions.");

  return params.cz
  .prompt(params.config.questions({ inquirer, gitInfo: params.gitInfo }))
  .then((answers) => {
    if (params.config.commitMessage === undefined)
      throw new Error("Could not find commitMessage.");
  
    const commitMessage = params.config.commitMessage({ answers, gitInfo: params.gitInfo });
  
    if (typeof commitMessage !== "string")
      throw new Error("commitMessage should return string.");
  
      params.commit(commitMessage);
  })
}

export const getPrompter = (config: InternalConfig) => {
  const prompter = (cz: CZ, commit: Commit) => getGitInfo().then(({ gitInfo }) => executeCommit({
    commit,
    config,
    cz,
    gitInfo
  }));

  return {
    prompter
  }
}
