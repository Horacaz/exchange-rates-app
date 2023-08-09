export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
    ],
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/types/**', 
  ],
  resolver: "ts-jest-resolver",
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  coverageProvider: "babel",
};