module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        plugins: [
          [
            "module-resolver",
            {
              root: ["./src"],
              alias: {
                "@": "./src",
              },
            },
          ],
        ],
      },
    },
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        semi: true,
        trailingComma: "es5",
        arrowParens: "always",
      },
    ],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
