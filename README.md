# CZ Format Extension

[![version](https://badge.fury.io/js/cz-format-extension.svg?style=flat)](https://badge.fury.io/js/cz-format-extension)
[![deploy](https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat)](https://github.com/algolia/shipjs)
[![LICENSE](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](https://opensource.org/licenses/MIT)

Extensible [Commitizen](https://github.com/commitizen/cz-cli)'s format

## Usage

```
npm install -D commitizen cz-format-extension
```

Make `.czrc` or add `config` fields into package.json

`.czrc`

```json
{
  "path": "cz-format-extension"
}
```

`package.json`

```json
{
  "config": {
    "commitizen": {
      "path": "cz-format-extension"
    }
  }
}
```

### Create Config file

Make `.czferc.js`

```js
module.exports = {
  questions(inquirer) {
    return [
      {...},
      {...},
    ]
  },
  commitMessage(answers) {
    return ...
  }
}
```

- questions
  - params
    - ([inquirer](https://github.com/SBoudrias/Inquirer.js))
  - return
    - [Question Object](https://github.com/SBoudrias/Inquirer.js#question)
- commitMessage
  - params
    - [answers](https://github.com/SBoudrias/Inquirer.js#answers)
  - return
    - string

#### Tips: Configuration settings with types

If you love to develop with types, you can use that with `JSDoc`.
You should install `@types/inquirer`.

```shell
npm install -D @types/inquirer
```

```js
module.exports = {
  /**
   * @param {import('inquirer').Inquirer} inquirer
   * @returns {import('inquirer').QuestionCollection}
   */
  questions(inquirer) {
    return [
      {
        type: "list",
        name: "questionType1",
        message: "Select answer",
        choices: [
          {...},
          {...}
        ]
      },
    ]
  },
  /**
   * @typedef {{questionType1: string; questionType2: string}} Answers
   *
   * @param {Answers} answers
   * @returns {string}
   */
  commitMessage(answers) {
    return `${answers.questionType1}${answers.questionType2}`
  }
}
```

## Inspired by

- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
- [cz-conventional-changelog-ja](https://github.com/AquiTCD/cz-conventional-changelog-ja)
