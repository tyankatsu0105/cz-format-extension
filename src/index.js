import searchAndLoad from "./searchAndLoad";

const getConfigQuestions = async () => {
  const { config } = await searchAndLoad();
  return config.questions;
};

getConfigQuestions();
