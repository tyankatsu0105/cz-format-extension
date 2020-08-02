<p align="center"><img width="300px" height="280px" src="https://raw.githubusercontent.com/tyankatsu0105/cz-format-extension/master/assets/logo.png" alt="cz format extension"></p>

<h2 align="center">cz-format-extension</h2>
<p align="center">
  Extensible <a href="https://github.com/commitizen/cz-cli">Commitizen</a>'s format
</p>

<p align="center">
  <a title="Current version" href="https://badge.fury.io/js/cz-format-extension" rel="nofollow">
    <img src="https://badge.fury.io/js/cz-format-extension.svg?style=flat">
  </a>
  <a title="deploy" href="https://github.com/algolia/shipjs" rel="nofollow">
    <img src="https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat">
  </a>
  <a title="MIT License" href="[LICENSE](https://opensource.org/licenses/MIT)" rel="nofollow">
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat">
  </a>
</p>

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
  questions({inquirer, gitInfo}) {
    return [
      {...},
      {...},
    ]
  },
  commitMessage({answers, gitInfo}) {
    return ...
  }
}
```

- questions
  - params
    - [inquirer](https://github.com/SBoudrias/Inquirer.js)
    - [gitInfo](https://github.com/rwjblue/git-repo-info)
  - return
    - [Question Object](https://github.com/SBoudrias/Inquirer.js#question)
- commitMessage
  - params
    - [answers](https://github.com/SBoudrias/Inquirer.js#answers)
    - [gitInfo](https://github.com/rwjblue/git-repo-info)
  - return
    - string

#### Tips: Configuration settings with types

If you love to develop with types, you can use that with `JSDocs`.

```js
/**
 * @typedef {{questionType1: string; questionType2: string}} Answers
 */

/** @type import('cz-format-extension').Config<Answers> */
module.exports = {
  questions({inquirer, gitInfo}) {
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
  commitMessage({answers, gitInfo}) {
    return `${answers.questionType1}${answers.questionType2}`
  }
}
```

## Inspired by

- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
- [cz-conventional-changelog-ja](https://github.com/AquiTCD/cz-conventional-changelog-ja)
