import path from "path";
import fs from "fs-extra";

interface IGit {
  repoPath: string;
  init: () => void;
  remove: () => void;
}

export class Git implements IGit {
  /**
   * Get directory path directory below the fixtures directory
   * @example new Git('path/to/fixture', 'repo')
   * Git.repoPath
   * // => 'path/to/fixture/repo'
   */
  public repoPath: string;

  private dotGitPath: string;
  private gitPath: string;
  constructor(private fixturePath: string, private repoName: string) {
    this.repoPath = path.join(this.fixturePath, this.repoName);
    this.dotGitPath = path.join(this.repoPath, "dot-git");
    this.gitPath = path.join(this.repoPath, ".git");
  }

  /**
   * Generate `.git` directory copy from `dot-git` directory
   */
  init() {
    fs.copySync(this.dotGitPath, this.gitPath);
  }

  /**
   * Remove generated `.git` directory
   */
  remove() {
    fs.removeSync(this.gitPath);
  }
}