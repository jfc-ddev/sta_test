module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transformIgnorePatterns: [
    "node_modules/(?!(your-esm-module|another-esm-module)/)",
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
