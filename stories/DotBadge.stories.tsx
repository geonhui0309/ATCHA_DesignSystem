import type { Meta, StoryObj } from "@storybook/react";

import { DotBadge } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/DotBadge",
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
