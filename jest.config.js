module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/react/dont-cleanup-after-each"],
};
