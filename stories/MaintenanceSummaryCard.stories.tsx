import type { Meta, StoryObj } from "@storybook/react";

import { MaintenanceSummaryCard } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/MaintenanceSummaryCard",
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
