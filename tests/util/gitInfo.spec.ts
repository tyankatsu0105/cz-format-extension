import { Git } from "../.jest/helpers";
import { getGitInfo } from "../../src/util";
import path from "path";

const fixturePath = path.join(__dirname, "fixtures");

describe("getGitInfo", () => {
  it("when run function, should return some property that helpful to use information about Git", async () => {
    const { gitInfo } = await getGitInfo();

    expect(gitInfo).toHaveProperty("sha");
    expect(gitInfo).toHaveProperty("abbreviatedSha");
    expect(gitInfo).toHaveProperty("branch");
    expect(gitInfo).toHaveProperty("tag");
    expect(gitInfo).toHaveProperty("committer");
    expect(gitInfo).toHaveProperty("committerDate");
    expect(gitInfo).toHaveProperty("author");
    expect(gitInfo).toHaveProperty("authorDate");
    expect(gitInfo).toHaveProperty("commitMessage");
    expect(gitInfo).toHaveProperty("root");
    expect(gitInfo).toHaveProperty("commonGitDir");
    expect(gitInfo).toHaveProperty("worktreeGitDir");
    expect(gitInfo).toHaveProperty("lastTag");
    expect(gitInfo).toHaveProperty("commitsSinceLastTag");
    expect(gitInfo).toHaveProperty("parents");
    expect(gitInfo).toHaveProperty("not_added");
    expect(gitInfo).toHaveProperty("created");
    expect(gitInfo).toHaveProperty("deleted");
    expect(gitInfo).toHaveProperty("modified");
    expect(gitInfo).toHaveProperty("renamed");
    expect(gitInfo).toHaveProperty("staged");
  });

  describe("should ", () => {
    it("should ", async () => {
      const git = new Git(fixturePath, "repo");
      git.init();

      const { gitInfo } = await getGitInfo(git.repoPath);

      expect(gitInfo).toHaveProperty("staged");
      git.remove();
    });
  });
});
