export const testEnvironment = "jsdom";
export const collectCoverageFrom = [
  "src/components/**/*.{ts,tsx}",
  "src/decorators/**/*.{ts,tsx}",
  "!src/**/*.stories.{ts,tsx}",
  "!src/**/index.ts",
  "!src/**/types.ts",
  "!src/**/config.ts",
];
export const moduleDirectories = ["node_modules", "src"];
export const setupFilesAfterEnv = ["./jest.setup.js"];
export const transform = {
  "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  "^.+\\.svg$": "<rootDir>/svgTransform.js",
};
export const moduleNameMapper = {
  "^@/(.*)$": "<rootDir>/src/$1",
};
