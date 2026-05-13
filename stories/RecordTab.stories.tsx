import type { Meta, StoryObj } from "@storybook/react";

import { RecordTab } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/RecordTab",
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
