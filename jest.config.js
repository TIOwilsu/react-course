module.exports = {
  collectCoverageFrom: [
    '<rootDir>/**/*.tsx',
    '<rootDir>/**/*.ts',
    '!<rootDir>/**/*styles.ts',
    '!<rootDir>/src/@types/**',
    '!<rootDir>/src/App.tsx',
    '!<rootDir>/src/index.tsx',
  ],
  resetMocks: true,
  clearMocks: true,
  testEnvironment: 'jsdom',
};
