import type { Meta, StoryObj } from "@storybook/react";

import { MaintenanceSummaryCard } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Cards/MaintenanceSummaryCard",
  component: MaintenanceSummaryCard,
  render: (args) => (
    <StoryCanvas width={312}>
      <MaintenanceSummaryCard {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof MaintenanceSummaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "collapsed"
  }
};
