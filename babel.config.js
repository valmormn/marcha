// babel.config.js

const presets = [
  [
    // "@babel/preset-es2015",
    // "@babel/preset-env",
    "@babel/env",
    {
      targets: {
        // edge: "7",
        // firefox: "40",
        // chrome: "47",
        // safari: "7.1",
        "browsers": ["last 6 versions"]
      },
      corejs: 3,
      // modules: false,
      // useBuiltIns: "usage"
      useBuiltIns: "false"
    },
  ],
];

const plugins = [
  // ["@babel/transform-arrow-functions"],
  // ["@babel/plugin-transform-modules-umd"],
  // ["@babel/plugin-transform-arrow-functions", { "spec": true }],
  // ["@babel/external-helpers"],
  // ["@babel/transform-runtime"],
  // ['@babel/plugin-transform-runtime', {
    // corejs: false,
    // corejs: 3,
    // proposals: true,
    // helpers: true,
    // regenerator: false,
    // useESModules: true,
  // }, ]
];

module.exports = {

  presets,
  plugins
};
