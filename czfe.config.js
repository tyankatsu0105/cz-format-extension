module.exports = {
  questions: [
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
          name: 'feat:',
          description: '新機能',
        },
        {
          name: 'fix:',
          description: 'バグ修正',
        },
      ],
    },
    {
      name: 'scope',
      message:
        '変更内容のスコープ(例:コンポーネントやファイル名):（enterでスキップ）\n',
      type: 'input',
      prefix: '👉',
    },
    {
      name: 'emoji',
      message: 'コミット内容に合うemojiを選択:',
      type: 'list',
      prefix: '👉',
      choices: [
        {
          name: ':bug:',
          description: '🐛 バグの修正',
        },
        {
          name: ':tada:',
          description: '🎉 新機能の実装',
        },
      ],
    },
    {
      name: 'body',
      message:
        '変更内容のスコープ(例:コンポーネントやファイル名):（enterでスキップ）\n',
      type: 'input',
      prefix: '👉',
    },
  ],
};
