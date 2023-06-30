module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest"
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/path/to/styleMock.js"
  },
  moduleFileExtensions: [
    "ts",
    "js",
    "html",
    "jsx",
    "json",
    "node"
    ],
  };
  