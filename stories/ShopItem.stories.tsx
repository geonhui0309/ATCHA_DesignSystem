import type { Meta, StoryObj } from "@storybook/react";

import { ShopItem } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/ShopItem",
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
