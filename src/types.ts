import { Inquirer, QuestionCollection } from "inquirer";
import { GitRepoInfo } from "git-repo-info";
import { StatusResult } from "simple-git";

export type CZ = Inquirer;
export type Commit = (commitMessage: string) => void;

export type GitInfo = GitRepoInfo &
  Pick<
    StatusResult,
    "not_added" | "created" | "deleted" | "modified" | "renamed" | "staged"
  > & {
    isFirstCommitOnCurrentBranch: boolean;
    trackingBranch: string | undefined;
    countCommitToTrackingBranch: string | undefined;
  };

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

export type InternalConfig = Partial<Config<unknown>>