import type { Meta, StoryObj } from "@storybook/react";

import { CategoryLabel } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/CategoryLabel",
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
