# cz-format-extension

🚧 WIP 🚧

This package is extension commit message format when use [commitizen](https://github.com/commitizen/cz-cli)

## install

```
yarn add cz-format-extension commitizen -D
```

## Setting

Path to `cz-format-extension` in `.czrc` or `package.json`

### .czrc

```
{
  "path": "cz-format-extension"
}
```

### package.json
```
"config": {
  "commitizen": {
    "path": "cz-format-extension"
  }
}
```

## Usage
```
yarn git-cz
```

## Thanks
Inspired by:

- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
- [cz-conventional-changelog-ja](https://github.com/AquiTCD/cz-conventional-changelog-ja)