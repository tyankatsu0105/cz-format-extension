import * as Cosmiconfig from "cosmiconfig";
import * as Const from "./const";
import { QuestionCollection, Answers, Inquirer } from "inquirer";
import { GitRepoInfo } from "git-repo-info";

const explorer = Cosmiconfig.cosmiconfigSync(Const.MODULE_NAME);

type Config = {
  questions: ({
    inquirer,
    gitInfo,
  }: {
    inquirer: Inquirer;
    gitInfo: GitRepoInfo;
  }) => QuestionCollection;
  commitMessage: ({
    answers,
    gitInfo,
  }: {
    answers: Answers;
    gitInfo: GitRepoInfo;
  }) => string;
};

type Initialize = {
  config: Partial<Config>;
};

export const initialize = (): Initialize => {
  const result = explorer.search();

  if (result === null) throw new Error("Could not find config file.");

  return {
    config: result.config as Config,
  };
};
