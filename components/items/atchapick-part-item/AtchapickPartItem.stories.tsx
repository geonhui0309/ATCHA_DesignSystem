import type { Meta, StoryObj } from "@storybook/react";

import { AtchapickPartItem } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Items/AtchapickPartItem",
  component: AtchapickPartItem,
  render: (args) => (
    <StoryCanvas width={360}>
      <AtchapickPartItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof AtchapickPartItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
