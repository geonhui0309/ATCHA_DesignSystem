import type { Meta, StoryObj } from "@storybook/react";

import { RecommendCard } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/RecommendCard",
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
