module.exports = {
  extends: ["@commitlint/config-conventional"], // Extends a shareable configuration
  rules: {
    "type-enum": [
      2,
      "always",
      ["ci", "chore", "docs", "ticket", "feat", "fix", "perf", "refactor", "revert", "style"],
    ],
  },
};
