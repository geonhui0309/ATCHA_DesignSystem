import type { Meta, StoryObj } from "@storybook/react";

import { PartItem } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Items/PartItem",
  component: PartItem,
  render: (args) => (
    <StoryCanvas width={360}>
      <PartItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof PartItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
