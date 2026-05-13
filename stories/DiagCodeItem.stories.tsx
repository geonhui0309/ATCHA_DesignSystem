import type { Meta, StoryObj } from "@storybook/react";

import { DiagCodeItem } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/DiagCodeItem",
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
