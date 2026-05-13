import type { Meta, StoryObj } from "@storybook/react";

import { HistoryList } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/HistoryList",
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
