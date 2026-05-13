import type { Meta, StoryObj } from "@storybook/react";

import { RecordTab } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Navigation/RecordTab",
  component: RecordTab,
  render: (args) => (
    <StoryCanvas width={360}>
      <RecordTab {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof RecordTab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "diag"
  }
};
