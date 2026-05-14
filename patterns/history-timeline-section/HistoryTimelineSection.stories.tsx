import type { Meta, StoryObj } from "@storybook/react";

import { HistoryTimelineSection } from "./index";
import { StoryCanvas } from "../../components/shared/story-helpers";

const meta = {
  title: "Patterns/HistoryTimelineSection",
  component: HistoryTimelineSection,
  render: (args) => (
    <StoryCanvas width={360}>
      <HistoryTimelineSection {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof HistoryTimelineSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
