import type { Meta, StoryObj } from "@storybook/react";

import { StatusItem } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Items/StatusItem",
  component: StatusItem,
  render: (args) => (
    <StoryCanvas width={312}>
      <StatusItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof StatusItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
