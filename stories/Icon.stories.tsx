import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/Icon",
  component: Icon,
  render: (args) => (
    <StoryCanvas>
      <Icon {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "home",
    size: 24
  }
};
