// Bebel is only used for `jest`
module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-env": {
          targets: {
            node: "14.15.0",
          },
        },
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "~": "./src",
        },
      },
    ],
  ],
};
