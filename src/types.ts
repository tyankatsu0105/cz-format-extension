import { Inquirer, QuestionCollection } from "inquirer";
import { GitRepoInfo } from "git-repo-info";
import { StatusResult } from "simple-git";

export type CZ = Inquirer;
export type Commit = (commitMessage: string) => void;

type GitInfo = GitRepoInfo &
  Pick<
    StatusResult,
    "not_added" | "created" | "deleted" | "modified" | "renamed" | "staged"
  >;

export type Config<T> = {
  questions: ({
    inquirer,
    gitInfo,
  }: {
    inquirer: Inquirer;
    gitInfo: GitInfo;
  }) => QuestionCollection;
  commitMessage: ({
    answers,
    gitInfo,
  }: {
    answers: T;
    gitInfo: GitInfo;
  }) => string;
};
