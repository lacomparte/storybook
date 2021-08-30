const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  typescript: {
    check: true,
  },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../src/components"),
      "@assets": path.resolve(__dirname, "../src/assets"),
    };
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        exclude: /node_modules/,
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    // config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
  typescript: {
    check: false,
    checkOptions: {
      tsconfig: path.resolve(__dirname, "./tsconfig.json"),
    },
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
