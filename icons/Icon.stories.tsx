import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "../components";
import { StoryCanvas } from "../components/shared/story-helpers";

const meta = {
  title: "Components/Display/Icon",
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
