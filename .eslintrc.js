module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5"
      }
    ]
  }
};
