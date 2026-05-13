import type { Meta, StoryObj } from "@storybook/react";

import { NavigationBar } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/NavigationBar",
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
