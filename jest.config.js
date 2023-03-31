module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // setupFilesAfterEnv: ['<rootDir>/src/config/setup-tests.ts'],
  moduleNameMapper: {
    '^modules/(.*)$': '<rootDir>/src/modules/$1', // imports que começam 'modules/...' vira 'root_projeto/src/modules/..
    '^utils/(.*)$': '<rootDir>/src/utils/$1', // imports que começam 'utils/...' vira 'root_projeto/src/utils/..
    '^errors(.*)$': '<rootDir>/src/errors', // imports que começam 'errors...' vira 'root_projeto/src/errors...
    '^app(.*)$': '<rootDir>/src/app' // imports que começam 'app...' vira 'root_projeto/src/app...
  }
};
