import type { Meta, StoryObj } from "@storybook/react";

import { RadioButton } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Inputs/RadioButton",
  component: RadioButton,
  render: (args) => (
    <StoryCanvas>
      <RadioButton {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: true
  }
};
