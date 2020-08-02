import * as Cosmiconfig from "cosmiconfig";
import * as Const from "./const";
import { Config } from "../types";

const explorer = Cosmiconfig.cosmiconfigSync(Const.MODULE_NAME);

type Initialize = {
  config: Partial<Config<unknown>>;
};

export const initialize = (): Initialize => {
  const result = explorer.search();

  if (result === null) throw new Error("Could not find config file.");

  return {
    config: result.config as Config<unknown>,
  };
};
