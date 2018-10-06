const questions = [
  // @todo 選択肢は上から読ませるようにするので、sort用にNumber降ることはしない
  {
    // @see https://github.com/SBoudrias/Inquirer.js/
    name: 'prefix',
    message: 'コミットする変更タイプを選択：',
    // 'list' 'input' 'number' 'confirm' 'rawlist' 'expand' 'checkbox' 'password' 'editor'
    type: 'list',
    prefix: '👉',
    choices: [
      {
        title: 'feat',
        description: '新機能',
      },
      {
        title: 'fix',
        description: 'バグ修正',
      },
    ],
  },
  {
    name: 'emoji',
    message: 'コミット内容に合うemojiを選択:',
    type: 'list',
    prefix: '👉',
    choices: [
      {
        title: ':bug:',
        description: '🐛 バグの修正',
      },
      {
        title: ':tada:',
        description: '🎉 新機能の実装',
      },
    ],
  },
];

module.exports = { questions };
