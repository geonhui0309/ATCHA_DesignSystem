import type { Meta, StoryObj } from "@storybook/react";

import { ShopListSection } from "./index";
import { StoryCanvas } from "../../components/shared/story-helpers";

const meta = {
  title: "Patterns/ShopListSection",
  component: ShopListSection,
  render: (args) => (
    <StoryCanvas width={360}>
      <ShopListSection {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof ShopListSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
