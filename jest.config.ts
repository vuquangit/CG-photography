// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  cacheDirectory: "<rootDir>/tmp/unit/",

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: ['src/**/*.{js,jsx,mjs,ts,tsx}'],
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,jsx,ts,tsx}"],

  // The directory where Jest should output its coverage files
  coverageDirectory: "<rootDir>/coverage",

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.js?(x)",
    "**/?(*.)+(spec|test).js?(x)",
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)+(spec|test).ts?(x)",
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: "http://localhost",

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ["<rootDir>/node_modules/"],

  // Indicates whether each individual test should be reported during the run
  verbose: false,

  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },

  snapshotSerializers: ["enzyme-to-json/serializer"],

  moduleDirectories: ["node_modules", "src"],

  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },

  moduleNameMapper: {
    // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
    // "\\.(css|less|scss|sass|png)$": "identity-obj-proxy",
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.svg": "<rootDir>/src/__mocks__/svgrMock.ts",
  },
};

export default config;
