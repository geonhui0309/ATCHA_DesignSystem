import type { Meta, StoryObj } from "@storybook/react";

import { ShopItem } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Items/ShopItem",
  component: ShopItem,
  render: (args) => (
    <StoryCanvas width={360}>
      <ShopItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof ShopItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
