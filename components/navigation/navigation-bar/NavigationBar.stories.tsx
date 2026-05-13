import type { Meta, StoryObj } from "@storybook/react";

import { NavigationBar } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Navigation/NavigationBar",
  component: NavigationBar,
  render: (args) => (
    <StoryCanvas width={360}>
      <NavigationBar {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof NavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default"
  }
};
