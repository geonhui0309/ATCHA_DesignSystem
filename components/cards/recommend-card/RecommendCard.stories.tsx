import type { Meta, StoryObj } from "@storybook/react";

import { RecommendCard } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Cards/RecommendCard",
  component: RecommendCard,
  render: (args) => (
    <StoryCanvas width={312}>
      <RecommendCard {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof RecommendCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
