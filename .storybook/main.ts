import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(ts|tsx)",
    "../icons/**/*.stories.@(ts|tsx)",
    "../tokens/**/*.stories.@(ts|tsx)"
  ],
  staticDirs: ["./public"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(config) {
    return {
      ...config,
      base: "./"
    };
  }
};

export default config;
