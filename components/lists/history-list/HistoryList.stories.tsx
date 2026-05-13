import type { Meta, StoryObj } from "@storybook/react";

import { HistoryList } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Lists/HistoryList",
  component: HistoryList,
  render: (args) => (
    <StoryCanvas width={360}>
      <HistoryList {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof HistoryList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
