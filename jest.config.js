module.exports = {
  transform: {
    "^.+\\.ts$": "@swc/jest",
  },
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.ts$",
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "js", "node"],
};
