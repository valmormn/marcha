module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    "jquery": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  // "parser": "babel-eslint",
  "parser": "eslint",
  "parserOptions": {
    "sourceType": "module",
    // "sourceType": "script",
    "allowImportExportEverywhere": true,
    "codeFrame": true,
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "strict": 0
  }
};
