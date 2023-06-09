/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.ts'],
  verbose: true,
  forceExit: true,
  testPathIgnorePatterns: ['/node_modules/'],
  passWithNoTests: true,
  clearMocks: true,
  resetMocks: true,
};
