"use strict";

var _searchAndLoad = _interopRequireDefault(require("./searchAndLoad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getConfigQuestions = async () => {
  const _ref = await (0, _searchAndLoad.default)(),
        config = _ref.config;

  return config.questions;
};

getConfigQuestions();