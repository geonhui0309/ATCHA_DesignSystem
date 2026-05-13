import type { Meta, StoryObj } from "@storybook/react";

import { FilterChip } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/FilterChip",
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
