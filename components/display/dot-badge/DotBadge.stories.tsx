import type { Meta, StoryObj } from "@storybook/react";

import { DotBadge } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Display/DotBadge",
  component: DotBadge,
  render: (args) => (
    <StoryCanvas>
      <DotBadge {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof DotBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
