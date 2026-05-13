import type { Meta, StoryObj } from "@storybook/react";

import { OtherServiceSection } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/OtherServiceSection",
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
