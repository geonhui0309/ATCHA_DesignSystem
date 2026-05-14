import type { Meta, StoryObj } from "@storybook/react";

import { StepProgressBar } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Feedback/StepProgressBar",
  component: StepProgressBar,
  argTypes: {
    step: {
      control: { type: "select" },
      options: ["step01", "step02", "step03"]
    }
  },
  render: (args) => (
    <StoryCanvas width={360}>
      <StepProgressBar {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof StepProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: "step02"
  }
};
