import type { Meta, StoryObj } from "@storybook/react";

import { DiagCodeItem } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Items/DiagCodeItem",
  component: DiagCodeItem,
  render: (args) => (
    <StoryCanvas width={312}>
      <DiagCodeItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof DiagCodeItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
