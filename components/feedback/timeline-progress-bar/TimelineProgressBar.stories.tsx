import type { Meta, StoryObj } from "@storybook/react";

import { TimelineProgressBar } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Feedback/TimelineProgressBar",
  component: TimelineProgressBar,
  argTypes: {
    step: {
      control: { type: "select" },
      options: ["step01", "step02", "step03"]
    }
  },
  render: (args) => (
    <StoryCanvas width={280}>
      <TimelineProgressBar {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof TimelineProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: "step02"
  }
};
