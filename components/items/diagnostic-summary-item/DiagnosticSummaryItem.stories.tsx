import type { Meta, StoryObj } from "@storybook/react";

import { DiagnosticSummaryItem } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Items/DiagnosticSummaryItem",
  component: DiagnosticSummaryItem,
  render: (args) => (
    <StoryCanvas width={312}>
      <DiagnosticSummaryItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof DiagnosticSummaryItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
