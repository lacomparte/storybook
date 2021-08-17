const path = require("path");

module.exports = {
  stories: [
    "../src/components/**/*.stories.js",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/preset-typescript",
      options: {
        forkTsCheckerWebpackPluginOptions: {
          tsconfig: path.resolve(__dirname, "../tsconfig.json"),
        },
      },
    },
  ],

  webpackFinal: async (config) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    }),
      (config.resolve.modules = [
        path.resolve(__dirname, ".."),
        "node_modules",
        "styles",
      ]);

    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "~/src/components"),
      "@assets": path.resolve(__dirname, "~/src/assets"),
      "@styles": path.resolve(__dirname, "~/src/styles"),
    };

    return config;
  },
};
