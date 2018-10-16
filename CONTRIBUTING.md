This is japanese only.

# issueの立て方

テンプレートがあるのでしたがって作成

- Assignees
- Labels
- Projects
- Milestone

は、OwnerまたはCollaboratorが設定する

# command

## test

```sh
$ npm run test
```

で`git-cz`のテストが出来ます。

コミットコメントが確認できたなら、

```sh
$ npm run reset 
```

で戻します。

## commit

```sh
$ npm run commit
```

で予め用意してあるフォーマットを用いてgit-czが走ります。  
コマンドラインに表示される選択肢に従ってください。  
すべて完了した場合はcommit messageが作成されます。
commitが確認できたら、プッシュしてください。

- コミットする変更タイプを選択:
  - リストから適当なものを選択

- 変更内容のスコープ(例:コンポーネントやファイル名):（enterでスキップ）
  - 変更したディレクトリやファイル名を入力

- コミット内容に合うemojiを選択:
  - リストから適当なものを選択

- 変更内容を要約した本質的説明:
  - 変更内容の概要を入力

- 変更内容の詳細:（enterでスキップ）
  - 変更内容の詳細を入力
  - 概要で分かるものであればここは未入力でも可

- 破壊的変更を含みますか？
  - 全く互換性がない変更があれば「y」

- 破壊的変更についての記述:
  - 破壊的変更の詳細を入力

- issueに関連した変更ですか？
  - githubのissueに則したcommitであれば「y」

- 関連issueを追記 (例:"fix #123", "re #123"):
  - re・・・reference:issue番号を記入 例）re #12
  - close・・・このコミットがマージされたらissueを閉じる 例）close #12

# ブランチの説明

## master

**絶対にこのブランチにマージしてはいけません。**  
masterはパッケージが公開できる状態の場合に使用されます。
基本masterでの操作はパッケージのOwnerが行います。

## beta

developmentと同義です。
トピックブランチはbetaから生やし、トピックブランチはbetaにマージします。
ですので、プルリクのマージ先は基本的にbetaになるはずです。

# PRのルール

※後ほど追記

テンプレートに従ったPRの作り方
PR名
travis