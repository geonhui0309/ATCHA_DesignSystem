import type { Meta, StoryObj } from "@storybook/react";

import { CategoryLabel } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Display/CategoryLabel",
  component: CategoryLabel,
  render: (args) => (
    <StoryCanvas>
      <CategoryLabel {...args}>#엔진오일</CategoryLabel>
    </StoryCanvas>
  )
} satisfies Meta<typeof CategoryLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
