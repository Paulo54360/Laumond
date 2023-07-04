const { pathsToModuleNameMapper } = require('ts-jest');

const tsconfig = require('./tsconfig.json');
const moduleNameMapper = pathsToModuleNameMapper(tsconfig.compilerOptions.paths, { prefix: '<rootDir>/' });

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/tests'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/laumond',
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    ...moduleNameMapper,
  },
};
