module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
  collectCoverageFrom: ['apps/**/*.ts', 'libs/**/*.ts', '!**/*.module.ts', '!**/main.ts'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@aquasense/common(.*)$': '<rootDir>/libs/common/src$1',
    '^@aquasense/domain(.*)$': '<rootDir>/libs/domain/src$1',
    '^@aquasense/database(.*)$': '<rootDir>/libs/database/src$1',
  },
};
