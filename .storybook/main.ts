import path from "node:path";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
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
      extensions: [".ts", ".tsx"],
      alias: {
        ...config?.resolve?.alias,
        app: path.resolve(__dirname, "../src"),
      },
    };

    return config;
  },
};
export default config;
