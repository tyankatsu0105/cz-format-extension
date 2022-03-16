import { getPrompter, initialize } from "./util";

const { config } = initialize();

export const engine = () => {
  const { prompter } = getPrompter(config);

  return {
    prompter,
  };
};
