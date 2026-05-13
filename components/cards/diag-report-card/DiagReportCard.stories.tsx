import type { Meta, StoryObj } from "@storybook/react";

import { DiagReportCard } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Cards/DiagReportCard",
  component: DiagReportCard,
  render: (args) => (
    <StoryCanvas width={360}>
      <DiagReportCard {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof DiagReportCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
