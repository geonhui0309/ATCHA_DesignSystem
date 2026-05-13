import type { Meta, StoryObj } from "@storybook/react";

import { DiagActionCard } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Cards/DiagActionCard",
  component: DiagActionCard,
  render: (args) => (
    <StoryCanvas width={360}>
      <DiagActionCard {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof DiagActionCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
