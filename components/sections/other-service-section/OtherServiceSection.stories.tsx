import type { Meta, StoryObj } from "@storybook/react";

import { OtherServiceSection } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Sections/OtherServiceSection",
  component: OtherServiceSection,
  render: (args) => (
    <StoryCanvas width={312}>
      <OtherServiceSection {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof OtherServiceSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
