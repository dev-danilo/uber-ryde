module.exports = {
  extends: ["expo", "prettier", "plugin:tailwindcss/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": 0,
  },
};
