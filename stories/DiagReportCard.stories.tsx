import type { Meta, StoryObj } from "@storybook/react";

import { DiagReportCard } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/DiagReportCard",
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
