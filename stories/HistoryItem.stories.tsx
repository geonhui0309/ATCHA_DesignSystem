import type { Meta, StoryObj } from "@storybook/react";

import { HistoryItem } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/HistoryItem",
  component: HistoryItem,
  render: (args) => (
    <StoryCanvas width={360}>
      <HistoryItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof HistoryItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
