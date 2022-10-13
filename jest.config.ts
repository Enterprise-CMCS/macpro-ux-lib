export default {
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "ts", "tsx", "json", "node"],
  roots: ["src"],
  testEnvironment: "jest-environment-jsdom", // Use browser-like testing environment
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  coveragePathIgnorePatterns: ["test-setup.tsx", "src/hooks/*"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // That one tells Jest to use ts-jest when dealing with TypeScript files
    "^.+\\.(png|svg)$": "<rootDir>/imgTransform.js", // handle for images
  },
  moduleNameMapper: {
    "@uswds/(.*)/usa-table/src":
      "<rootDir>/node_modules/@uswds/uswds/packages/usa-table/src",
    "@uswds/(.*)/usa-tooltip/src":
      "<rootDir>/node_modules/@uswds/uswds/packages/usa-tooltip/src",
    "@uswds/(.*)/usa-file-input/src":
      "<rootDir>/node_modules/@uswds/uswds/packages/usa-file-input/src",
  },
};
