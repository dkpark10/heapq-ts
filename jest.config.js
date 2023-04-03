module.exports = {
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'node',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
