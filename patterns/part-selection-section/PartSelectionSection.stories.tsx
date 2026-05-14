import type { Meta, StoryObj } from "@storybook/react";

import { PartSelectionSection } from "./index";
import { StoryCanvas } from "../../components/shared/story-helpers";

const meta = {
  title: "Patterns/PartSelectionSection",
  component: PartSelectionSection,
  render: (args) => (
    <StoryCanvas width={360}>
      <PartSelectionSection {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof PartSelectionSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
