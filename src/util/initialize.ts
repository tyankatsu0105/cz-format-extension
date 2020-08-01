import * as Cosmiconfig from "cosmiconfig";
import * as Const from "./const";
import { QuestionCollection, Answers, Inquirer } from "inquirer";

const explorer = Cosmiconfig.cosmiconfigSync(Const.MODULE_NAME);

type Search = NonNullable<
  ReturnType<ReturnType<typeof Cosmiconfig.cosmiconfigSync>["search"]>
>;

type Config = {
  questions: (inquirer: Inquirer) => QuestionCollection;
  commitMessage: (answers: Answers) => string;
};

type Initialize = Pick<Search, "filepath"> & {
  config: Partial<Config>;
};

export const initialize = (): Initialize => {
  const result = explorer.search();

  if (result === null) throw new Error("Can not find config file.");

  return {
    config: result.config as Config,
    filepath: result.filepath,
  };
};
