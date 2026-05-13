import type { Meta, StoryObj } from "@storybook/react";

import { InputFieldWithButton } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/InputFieldWithButton",
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
