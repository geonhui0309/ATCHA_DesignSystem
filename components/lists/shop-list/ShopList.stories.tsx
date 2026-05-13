import type { Meta, StoryObj } from "@storybook/react";

import { ShopList } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Lists/ShopList",
  component: ShopList,
  render: (args) => (
    <StoryCanvas width={360}>
      <ShopList {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof ShopList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
