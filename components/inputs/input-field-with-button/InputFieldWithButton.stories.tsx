import type { Meta, StoryObj } from "@storybook/react";

import { InputFieldWithButton } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Inputs/InputFieldWithButton",
  component: InputFieldWithButton,
  render: (args) => (
    <StoryCanvas>
      <InputFieldWithButton {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof InputFieldWithButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
