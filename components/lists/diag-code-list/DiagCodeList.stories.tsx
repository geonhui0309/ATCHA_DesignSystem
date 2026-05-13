import type { Meta, StoryObj } from "@storybook/react";

import { DiagCodeList } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Lists/DiagCodeList",
  component: DiagCodeList,
  render: (args) => (
    <StoryCanvas width={312}>
      <DiagCodeList {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof DiagCodeList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
