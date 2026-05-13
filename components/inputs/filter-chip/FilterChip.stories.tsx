import type { Meta, StoryObj } from "@storybook/react";

import { FilterChip } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Inputs/FilterChip",
  component: FilterChip,
  render: (args) => (
    <StoryCanvas>
      <FilterChip {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof FilterChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    selected: true
  }
};
