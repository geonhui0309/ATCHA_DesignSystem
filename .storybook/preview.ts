import type { Preview } from "@storybook/react";

import "../components/index.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "#f5f5f5" },
        { name: "white", value: "#ffffff" }
      ]
    }
  }
};

export default preview;
