# cz-format-extension

🚧 WIP 🚧  

npm is [here](https://www.npmjs.com/package/cz-format-extension)

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

## Contribute
See [CONTRIBUTING.md](CONTRIBUTING.md)


## Thanks
Inspired by:

- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
- [cz-conventional-changelog-ja](https://github.com/AquiTCD/cz-conventional-changelog-ja)