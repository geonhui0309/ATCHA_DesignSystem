import type { Meta, StoryObj } from "@storybook/react";

import { AdditionalServiceSection } from "./index";
import { StoryCanvas } from "../../components/shared/story-helpers";

const meta = {
  title: "Patterns/AdditionalServiceSection",
  component: AdditionalServiceSection,
  render: (args) => (
    <StoryCanvas width={312}>
      <AdditionalServiceSection {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof AdditionalServiceSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
