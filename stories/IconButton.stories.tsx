import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  render: (args) => (
    <StoryCanvas>
      <IconButton {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    state: "default"
  }
};
