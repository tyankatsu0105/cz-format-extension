import * as Cosmiconfig from "cosmiconfig";

import { InternalConfig } from "../types";
import * as Const from "./const";

const explorer = Cosmiconfig.cosmiconfigSync(Const.MODULE_NAME);

type Initialize = {
  config: InternalConfig;
};

export const initialize = (): Initialize => {
  const result = explorer.search();

  if (result === null) throw new Error("Could not find config file.");

  return {
    config: result.config,
  };
};
