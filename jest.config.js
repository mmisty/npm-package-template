const TS_CONFIG_PATH = './tsconfig.json';
const { compilerOptions } = require(TS_CONFIG_PATH);
const { pathsToModuleNameMapper } = require('ts-jest');

const SRC_PATH = '<rootDir>/src';

module.exports = {
  // roots: ['<rootDir>/tests'],
  roots: ['<rootDir>/tests'],
  testMatch: ['**/tests/**/(*.)+(spec|test).[t]s?(x)', '!**/dist/**/*.*'],
  collectCoverage: false,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: SRC_PATH }),
  moduleFileExtensions: ['ts', 'js'],
  clearMocks: true,
  coverageDirectory: 'reports/coverage-jest',
  coverageReporters: ['text', 'lcov', 'cobertura', 'json'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', 'src/*.{ts,tsx}', '!**/node_modules/**'],
  testEnvironment: 'node',
};
