import { GitRepoInfo } from "git-repo-info";
import { Inquirer, QuestionCollection } from "inquirer";
import { StatusResult } from "simple-git";

export type CZ = Inquirer;
export type Commit = (commitMessage: string) => void;

export type GitInfo = GitRepoInfo &
  Pick<
    StatusResult,
    "not_added" | "created" | "deleted" | "modified" | "renamed" | "staged"
  > & {
    countCommitToTrackingBranch: string | undefined;
    isFirstCommitOnCurrentBranch: boolean;
    trackingBranch: string | undefined;
  };

export type Config<T> = {
  commitMessage: ({
    answers,
    gitInfo,
  }: {
    answers: T;
    gitInfo: GitInfo;
  }) => string;
  questions: ({
    gitInfo,
    inquirer,
  }: {
    gitInfo: GitInfo;
    inquirer: Inquirer;
  }) => QuestionCollection;
};

export type InternalConfig = Partial<Config<unknown>>;
