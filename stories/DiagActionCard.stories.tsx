import type { Meta, StoryObj } from "@storybook/react";

import { DiagActionCard } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/DiagActionCard",
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
