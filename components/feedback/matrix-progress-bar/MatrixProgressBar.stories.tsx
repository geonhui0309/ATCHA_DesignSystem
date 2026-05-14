import type { Meta, StoryObj } from "@storybook/react";

import { MatrixProgressBar } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Feedback/MatrixProgressBar",
  component: MatrixProgressBar,
  argTypes: {
    step: {
      control: { type: "select" },
      options: ["step01", "step02", "step03", "step04", "step05"]
    }
  },
  render: (args) => (
    <StoryCanvas width={178}>
      <MatrixProgressBar {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof MatrixProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: "step03"
  }
};
