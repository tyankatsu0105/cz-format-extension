import gitRepoInfo from "git-repo-info";
import simpleGit from "simple-git";

export const getGitInfo = async (repoPath: string = process.cwd()) => {
  const repoInfo = gitRepoInfo(repoPath);
  const gitStatus = simpleGit(repoPath);
  const status = await gitStatus.status();

  const { not_added, created, deleted, modified, renamed, staged } = status;

  const gitInfo = {
    ...repoInfo,
    not_added,
    created,
    deleted,
    modified,
    renamed,
    staged,
  };

  return { gitInfo };
};
