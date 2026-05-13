import type { Meta, StoryObj } from "@storybook/react";

import { VehicleWarningSection } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Sections/VehicleWarningSection",
  component: VehicleWarningSection,
  render: (args) => (
    <StoryCanvas width={360}>
      <VehicleWarningSection {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof VehicleWarningSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
