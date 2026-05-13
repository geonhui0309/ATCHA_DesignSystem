import type { Meta, StoryObj } from "@storybook/react";

import { NumberCountBadge } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/NumberCountBadge",
  component: NumberCountBadge,
  render: (args) => (
    <StoryCanvas>
      <NumberCountBadge {...args}>1</NumberCountBadge>
    </StoryCanvas>
  )
} satisfies Meta<typeof NumberCountBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
