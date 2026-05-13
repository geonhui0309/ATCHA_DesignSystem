import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/Label",
  component: Label,
  render: (args) => (
    <StoryCanvas>
      <Label {...args}>Label</Label>
    </StoryCanvas>
  )
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
