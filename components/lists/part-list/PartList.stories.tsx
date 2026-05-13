import type { Meta, StoryObj } from "@storybook/react";

import { PartList } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Lists/PartList",
  component: PartList,
  render: (args) => (
    <StoryCanvas width={360}>
      <PartList {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof PartList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
