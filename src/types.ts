import { Inquirer, QuestionCollection } from "inquirer";
import { GitRepoInfo } from "git-repo-info";

export type CZ = Inquirer;
export type Commit = (commitMessage: string) => void;

export type Config<T> = {
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
    answers: T;
    gitInfo: GitRepoInfo;
  }) => string;
};
