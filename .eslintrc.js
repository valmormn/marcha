module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    "jquery": true
  },
  // "extends": "eslint:recommended",
  "extends": [
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    // "eslint:recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  // "parser": "eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    // "sourceType": "script",
    "allowImportExportEverywhere": true,
    "codeFrame": true,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
    "strict": 0,
    "prettier/prettier": "error"
  }
};
