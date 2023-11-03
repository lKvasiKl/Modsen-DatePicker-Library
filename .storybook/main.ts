import path from "node:path";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  env: (config) => ({
    ...config,
  }),
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config?.resolve?.alias,
        assets: path.resolve(__dirname, "../src/assets"),
        components: path.resolve(__dirname, "../src/components"),
        constants: path.resolve(__dirname, "../src/constants"),
        decorators: path.resolve(__dirname, "../src/decorators"),
        hooks: path.resolve(__dirname, "../src/hooks"),
        providers: path.resolve(__dirname, "../src/providers"),
        utils: path.resolve(__dirname, "../src/utils"),
      },
    };

    return config;
  },
  previewHead: (head) => `
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap" rel="stylesheet">
  `,
};
export default config;
