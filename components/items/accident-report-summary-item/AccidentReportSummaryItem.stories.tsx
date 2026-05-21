import type { Meta, StoryObj } from "@storybook/react";

import { AccidentReportSummaryItem } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Items/AccidentReportSummaryItem",
  component: AccidentReportSummaryItem,
  render: (args) => (
    <StoryCanvas width={312}>
      <AccidentReportSummaryItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof AccidentReportSummaryItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Complete: Story = {
  args: {
    status: "completed"
  }
};
