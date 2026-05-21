import type { Meta, StoryObj } from "@storybook/react";

import { DiagnosticSummaryList } from "./index";
import { StoryCanvas } from "../../components/shared/story-helpers";

const meta = {
  title: "Patterns/DiagnosticSummaryList",
  component: DiagnosticSummaryList,
  render: (args) => (
    <StoryCanvas width={312}>
      <DiagnosticSummaryList {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof DiagnosticSummaryList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
