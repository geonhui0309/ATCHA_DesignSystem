import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Inputs/Button",
  component: Button,
  render: (args) => (
    <StoryCanvas>
      <Button {...args}>Label</Button>
    </StoryCanvas>
  )
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "filled",
    size: "large",
    iconLeft: false,
    iconRight: false
  }
};
