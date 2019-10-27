module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    // "jquery": true
  },
  // "extends": "eslint:recommended",
  "extends": [
    "eslint:recommended",
    // "plugin:react/recommended",
    "plugin:prettier/recommended",
    // "prettier/flowtype",
    // "prettier/react",
    // "prettier/standard",
  ],
  "globals": {},
  "parser": "babel-eslint",
  // "parser": "eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module",
    // "sourceType": "script",
    "allowImportExportEverywhere": false,
    // "codeFrame": true
  },
  "plugins": [
    "babel",
    // "react",
    "prettier"
  ],
  "rules": {
    // "strict": 0,
    // "babel/new-cap": 1,
    // "babel/camelcase": 1,
    // "babel/no-invalid-this": 1,
    // "babel/object-curly-spacing": 1,
    // "babel/quotes": 1,
    // "babel/semi": 1,
    // "babel/no-unused-expressions": 1,
    // "babel/valid-typeof": 1,
    // "prettier/prettier": "error",
    // "react/jsx-uses-react": "error",
    // "react/jsx-uses-vars": "error",
  }
};
