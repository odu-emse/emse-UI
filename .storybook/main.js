const { mergeConfig } = require('vite');
const { resolve } = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage"
  ],
  "staticDirs": [
    '../public'
  ],
  "framework": "@storybook/react",
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  async viteFinal(config, { configType }) {
    // TRY to reduce file sizes for SB to avoid GA chromatic deploy failure
    //const usePlugins = [];
    if (configType === "PRODUCTION") {
      //usePlugins.push(splitVendorChunkPlugin());
      // temporarily bumping up chunk size until we can figure out what's bloating this for SB
      // config.build.chunkSizeWarningLimit = 15000;
      config.build.sourcemap = false;
    }
    // return the customized config
    return mergeConfig(config, {
      // customize the vite config here
      //plugins: usePlugins,
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              lodash: ["lodash"],
              react: ["react"],
              "react-dom": ["react-dom"],
              "moment": ["moment"],
              flowbite: ["flowbite"],
              "rollup-plugin-polyfill-node": ["rollup-plugin-polyfill-node"],
            },
          },
        },
      },
      resolve: {
        alias: {
          "@": resolve(__dirname, "/src"),
          "~": resolve(__dirname, "/src"),
        },
      },
    });
  },
}
