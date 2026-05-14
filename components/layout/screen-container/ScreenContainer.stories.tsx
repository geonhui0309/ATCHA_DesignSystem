import type { Meta, StoryObj } from "@storybook/react";

import { ScreenContainer } from "../../index";

const meta = {
  title: "Components/Layout/ScreenContainer",
  component: ScreenContainer,
  render: (args) => (
    <div style={{ padding: 24, background: "#f7f8fa" }}>
      <ScreenContainer {...args}>
        <div style={{ height: 56, borderRadius: 12, background: "#ffffff" }} />
        <div style={{ height: 96, borderRadius: 12, background: "#ffffff" }} />
      </ScreenContainer>
    </div>
  )
} satisfies Meta<typeof ScreenContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FullWidth: Story = {
  args: {
    maxWidth: "100%"
  }
};
