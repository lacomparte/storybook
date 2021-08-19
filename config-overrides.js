const {
  override,
  setWebpackOptimizationSplitChunks,
  addBabelPlugins,
  addBundleVisualizer,
  useBabelRc,
  addWebpackAlias,
} = require("customize-cra");
const PACKAGE = require("./package.json");
const path = require("path");

function overrideConfig(config) {
  const { buildName } = PACKAGE;
  config.output = {
    ...config.output,
    filename: `${buildName || "bundle"}.js`,
    chunkFilename: "chunk-vendors.js",
  };

  config.optimization.runtimeChunk = false;

  return config;
}

module.exports = {
  webpack: override(
    useBabelRc(),
    ...addBabelPlugins([
      "babel-plugin-styled-components",
      {
        displayName: process.env.NODE_ENV === "production" ? false : true,
        namespace: "story",
      },
    ]),
    overrideConfig,
    setWebpackOptimizationSplitChunks({
      cacheGroups: {
        vendor: {
          chunks: "initial",
        },
      },
    }),
    addBundleVisualizer(
      {
        analyzerMode: "static",
        reportFilename: `${PACKAGE.buildName}-report.html`,
      },
      true
    ),
    addWebpackAlias({
      "@": path.resolve(__dirname, "src"),
    })
  ),
};
