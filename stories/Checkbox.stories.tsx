import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  render: (args) => (
    <StoryCanvas>
      <Checkbox {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "필수 약관에 동의합니다",
    defaultChecked: true,
    error: false
  }
};
