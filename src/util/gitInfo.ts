import gitRepoInfo from "git-repo-info";
import simpleGit from "simple-git";
import { execSync } from "child_process";

import { GitInfo } from "../types";

const getIsFirstCommitOnCurrentBranch = (): {
  isFirstCommitOnCurrentBranch: GitInfo["isFirstCommitOnCurrentBranch"];
} => {
  let isFirstCommitOnCurrentBranch;
  try {
    const nearestBranchOrTag = execSync(
      "git describe --contains --always --all"
    );
    const currentBranch = execSync("git rev-parse --abbrev-ref HEAD");

    isFirstCommitOnCurrentBranch =
      nearestBranchOrTag.toString().trim() === currentBranch.toString().trim();
  } catch (error) {
    // If not exist remote origin branch, git describe will fail and show error
    isFirstCommitOnCurrentBranch = false;
  }

  return { isFirstCommitOnCurrentBranch };
};

const getTrackingBranch = (): {
  trackingBranch: GitInfo["trackingBranch"];
} => {
  let trackingBranch;

  try {
    trackingBranch = execSync(
      "git rev-parse --abbrev-ref --symbolic-full-name @{u}"
    )
      .toString()
      .trim();
  } catch (error) {
    trackingBranch = undefined;
  }

  return { trackingBranch };
};

const getCountCommitToTrackingBranch = (
  trackingBranch: GitInfo["trackingBranch"]
): {
  countCommitToTrackingBranch: GitInfo["countCommitToTrackingBranch"];
} => {
  let countCommitToTrackingBranch;
  if (trackingBranch === undefined) {
    countCommitToTrackingBranch = undefined;
    return { countCommitToTrackingBranch };
  }

  try {
    countCommitToTrackingBranch = execSync(
      `git rev-list --count HEAD ^${trackingBranch}`
    )
      .toString()
      .trim();
  } catch (error) {
    countCommitToTrackingBranch = undefined;
  }

  return { countCommitToTrackingBranch };
};

export const getGitInfo = async (
  repoPath: string = process.cwd()
): Promise<{ gitInfo: GitInfo }> => {
  const repoInfo = gitRepoInfo(repoPath);
  const gitStatus = simpleGit(repoPath);
  const status = await gitStatus.status();

  const { not_added, created, deleted, modified, renamed, staged } = status;

  const { isFirstCommitOnCurrentBranch } = getIsFirstCommitOnCurrentBranch();
  const { trackingBranch } = getTrackingBranch();
  const { countCommitToTrackingBranch } = getCountCommitToTrackingBranch(
    trackingBranch
  );

  const gitInfo = {
    ...repoInfo,
    not_added,
    created,
    deleted,
    modified,
    renamed,
    staged,
    isFirstCommitOnCurrentBranch,
    trackingBranch,
    countCommitToTrackingBranch,
  };

  return { gitInfo };
};
