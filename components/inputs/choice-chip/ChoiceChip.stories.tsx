import type { Meta, StoryObj } from "@storybook/react";

import { ChoiceChip } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Inputs/ChoiceChip",
  component: ChoiceChip,
  render: (args) => (
    <StoryCanvas>
      <ChoiceChip {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof ChoiceChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "00:00",
    selected: true
  }
};
