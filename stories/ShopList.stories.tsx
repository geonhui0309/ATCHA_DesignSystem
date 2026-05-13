import type { Meta, StoryObj } from "@storybook/react";

import { ShopList } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/ShopList",
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
