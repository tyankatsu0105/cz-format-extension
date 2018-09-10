'format cjs';

const wrap = require('word-wrap');
const map = require('lodash.map');
const longest = require('longest');
const rightPad = require('right-pad');

const filter = function(array) {
  return array.filter(x => x);
};

// This can be any kind of SystemJS compatible module.
// We use Commonjs here, but ES6 or AMD would do just
// fine.
module.exports = function(options) {
  const typesPrefix = options.typesPrefix;
  const typesEmoji = options.typesEmoji;

  const length = longest(Object.keys(typesPrefix)).length + 1;
  const choicesPrefix = map(typesPrefix, (type, key) => ({
    name: `${rightPad(`${key}:`, length)} ${type.description}`,
    value: key
  }));
  const choicesEmojiPrefix = map(typesEmoji, (type, key) => ({
    name: `${rightPad(`${key}:`, length)} ${type.description}`,
    value: key
  }));

  return {
    // When a user runs `git cz`, prompter will
    // be executed. We pass you cz, which currently
    // is just an instance of inquirer.js. Using
    // this you can ask questions and get answers.
    //
    // The commit callback should be executed when
    // you're ready to send back a commit template
    // to git.
    //
    // By default, we'll de-indent your commit
    // template and will keep empty lines.
    prompter(cz, commit) {
      // console.log('\nLine 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.\n');
      console.log(
        '\n1行目は100文字で切り取られ、超過分は次行以降に記載されます。\n'
      );

      // Let's ask some questions of the user
      // so that we can populate our commit
      // template.
      //
      // See inquirer.js docs for specifics.
      // You can also opt to use another input
      // collection library if you prefer.
      cz.prompt([
        {
          type: 'list',
          name: 'type',
          message: 'コミットする変更タイプを選択:',
          choices: choicesPrefix
        },
        {
          type: 'input',
          name: 'scope',
          message:
            '変更内容のスコープ(例:コンポーネントやファイル名):（enterでスキップ）\n'
        },
        {
          type: 'list',
          name: 'emoji',
          message: 'コミット内容に合うemojiを選択:',
          choices: choicesEmojiPrefix
        },
        {
          type: 'input',
          name: 'subject',
          message: '変更内容を要約した本質的説明:\n'
        },
        {
          type: 'input',
          name: 'body',
          message: '変更内容の詳細:（enterでスキップ）\n'
        },
        {
          type: 'confirm',
          name: 'isBreaking',
          message: '破壊的変更を含みますか？',
          default: false
        },
        {
          type: 'input',
          name: 'breaking',
          message: '破壊的変更についての記述:\n',
          when(answers) {
            return answers.isBreaking;
          }
        },
        {
          type: 'confirm',
          name: 'isIssueAffected',
          message: 'issueに関連した変更ですか？',
          default: false
        },
        {
          type: 'input',
          name: 'issues',
          message: '関連issueを追記 (例:"fix #123", "re #123"):\n',
          when(answers) {
            return answers.isIssueAffected;
          }
        }
      ]).then(answers => {
        const maxLineWidth = 100;

        const wrapOptions = {
          trim: true,
          newline: '\n',
          indent: '',
          width: maxLineWidth
        };

        // parentheses are only needed when a scope is present
        let scope = answers.scope.trim();
        scope = scope ? `(${answers.scope.trim()})` : '';

        // Hard limit this line
        const head = `${answers.type}${scope}: :${
          answers.emoji
        }: ${answers.subject.trim()}`.slice(0, maxLineWidth);

        // Wrap these lines at 100 characters
        const body = wrap(answers.body, wrapOptions);

        // Apply breaking change prefix, removing it if already present
        let breaking = answers.breaking ? answers.breaking.trim() : '';
        breaking = breaking
          ? `BREAKING CHANGE: ${breaking.replace(/^BREAKING CHANGE: /, '')}`
          : '';
        breaking = wrap(breaking, wrapOptions);

        const issues = answers.issues ? wrap(answers.issues, wrapOptions) : '';

        const footer = filter([breaking, issues]).join('\n\n');

        commit(`${head}\n\n${body}\n\n${footer}`);
        console.log(`
======================
${head}\n\n${body}\n\n${footer}
======================
        `)
      });
    }
  };
};
