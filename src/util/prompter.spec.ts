import inquirer from "inquirer";

import { InternalConfig } from "../types";
import { getGitInfo } from "./gitInfo";
import * as Prompter from "./prompter";

// ============================================
// mock
// ============================================

jest.mock("inquirer");
jest.mock("./gitInfo");

const czMock = inquirer as unknown as jest.Mock & {
  prompt: jest.Mock;
};
const gitInfoMock = getGitInfo as unknown as jest.Mock;

// ============================================
// test
// ============================================

describe("prompter", () => {
  describe("getPrompter", () => {
    it("when run, then return property 'prompter'", () => {
      const config: InternalConfig = {
        commitMessage: jest.fn(),
        questions: jest.fn(),
      };

      const result = Prompter.getPrompter(config);

      expect(result).toHaveProperty("prompter");
    });
  });

  describe("executeCommit", () => {
    czMock.prompt.mockReturnValue(Promise.resolve({}) as any);
    let params: Parameters<typeof Prompter.executeCommit>[0];
    beforeEach(() => {
      params = {
        commit: jest.fn(),
        config: {
          commitMessage: jest.fn(() => "commitMessage"),
          questions: jest.fn(),
        },
        cz: czMock as unknown as typeof inquirer,
        gitInfo: gitInfoMock as unknown as Awaited<
          ReturnType<typeof getGitInfo>
        >["gitInfo"],
      };
    });

    it("when run, then return commit message text", async () => {
      await Prompter.executeCommit(params);

      expect(params.commit).toHaveBeenCalledWith("commitMessage");
    });

    it("when commit message is not string, then throw error", async () => {
      try {
        params.config.commitMessage = undefined;
        await Prompter.executeCommit(params);
      } catch (error) {
        if (error instanceof Error)
          expect(error.message).toBe("Could not find commitMessage.");
      }
    });
  });
});
