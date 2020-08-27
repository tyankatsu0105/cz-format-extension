import gitRepoInfo from "git-repo-info";
import simpleGit from "simple-git";

const repoInfo = gitRepoInfo();
const gitStatus = simpleGit();

export const getGitInfo = async () => {
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

  console.log(gitInfo);

  return { gitInfo };
};
