import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "../../index";

const meta = {
  title: "Components/Layout/Stack",
  component: Stack,
  render: (args) => (
    <div style={{ padding: 24, width: 360 }}>
      <Stack {...args}>
        <div style={{ height: 40, borderRadius: 12, background: "#ebe9ff" }} />
        <div style={{ height: 56, borderRadius: 12, background: "#f7f8fa" }} />
        <div style={{ height: 72, borderRadius: 12, background: "#edeef2" }} />
      </Stack>
    </div>
  )
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LargeGap: Story = {
  args: {
    gap: "large"
  }
};
