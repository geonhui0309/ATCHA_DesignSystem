import type { Meta, StoryObj } from "@storybook/react";

import { InputField } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Inputs/InputField",
  component: InputField,
  render: (args) => (
    <StoryCanvas width={312}>
      <InputField {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "storybook-input-field",
    placeholder: "Hint_Text",
    helperText: "Caption",
    trailingIcons: ["home", "home"]
  }
};
