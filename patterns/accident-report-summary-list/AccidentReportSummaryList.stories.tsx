import type { Meta, StoryObj } from "@storybook/react";

import { AccidentReportSummaryList } from "./index";
import { StoryCanvas } from "../../components/shared/story-helpers";

const meta = {
  title: "Patterns/AccidentReportSummaryList",
  component: AccidentReportSummaryList,
  render: (args) => (
    <StoryCanvas width={360}>
      <AccidentReportSummaryList {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof AccidentReportSummaryList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
