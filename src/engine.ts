import { QuestionCollection } from "inquirer";
import { initialize } from "./util";
import * as inquirer from "inquirer";

type CZ = {
  prompt: <T>(questions: QuestionCollection<T>) => Promise<T>;
};

type Commit = (commitMessage: string) => void;

export const engine = () => {
  const { config } = initialize();

  const prompter = (cz: CZ, commit: Commit) => {
    if (config.questions === undefined)
      throw new Error("Could not find questions.");

    return cz.prompt(config.questions(inquirer)).then((answers) => {
      if (config.commitMessage === undefined)
        throw new Error("Could not find commitMessage.");

      const commitMessage = config.commitMessage(answers);

      if (typeof commitMessage !== "string")
        throw new Error("commitMessage should return string.");

      commit(commitMessage);
    });
  };

  return {
    prompter,
  };
};
