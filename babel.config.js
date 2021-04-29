module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: true,
        },
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    [
      "inline-react-svg",
      {
        "svgo": {
          "plugins": [
            {
              "name": "removeAttrs",
              "params": { "attrs": "(data-name)" }
            },
            "cleanupIDs"
          ]
        }
      }
    ]
  ],
};
