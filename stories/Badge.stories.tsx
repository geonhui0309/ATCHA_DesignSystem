import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/Badge",
  component: Badge,
  render: (args) => (
    <StoryCanvas>
      <Badge {...args}>Label</Badge>
    </StoryCanvas>
  )
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tone: "information",
    emphasis: "solid",
    dot: false
  }
};
