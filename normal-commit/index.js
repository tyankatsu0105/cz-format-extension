'format cjs';

const engine = require('./engine');
const CommitTypesPrefix = require('./commit-types-prefix');
const CommitTypesEmoji = require('./commit-types-emoji');

module.exports = engine({
  typesPrefix: CommitTypesPrefix.types,
  typesEmoji: CommitTypesEmoji.types
});
