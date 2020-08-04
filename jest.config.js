module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.test.json",
    },
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "js", "node"],
};
