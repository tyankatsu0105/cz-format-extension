import gitRepoInfo from "git-repo-info";
import simpleGit from "simple-git";
import { execSync } from "child_process";

const getIsFirstCommitOnCurrentBranch = () => {
  let isFirstCommitOnCurrentBranch;
  try {
    const nearestBranchOrTag = execSync(
      "git describe --contains --always --all"
    );
    const currentBranch = execSync("git rev-parse --abbrev-ref HEAD");

    isFirstCommitOnCurrentBranch =
      nearestBranchOrTag.toString() === currentBranch.toString();
  } catch (error) {
    // If not exist remote origin branch, git describe will fail and show error
    isFirstCommitOnCurrentBranch = false;
  }

  return { isFirstCommitOnCurrentBranch };
};

export const getGitInfo = async (repoPath: string = process.cwd()) => {
  const repoInfo = gitRepoInfo(repoPath);
  const gitStatus = simpleGit(repoPath);
  const status = await gitStatus.status();

  const { not_added, created, deleted, modified, renamed, staged } = status;

  const { isFirstCommitOnCurrentBranch } = getIsFirstCommitOnCurrentBranch();

  const gitInfo = {
    ...repoInfo,
    not_added,
    created,
    deleted,
    modified,
    renamed,
    staged,
    isFirstCommitOnCurrentBranch,
  };

  return { gitInfo };
};
