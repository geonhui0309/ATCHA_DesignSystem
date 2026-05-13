import type { Meta, StoryObj } from "@storybook/react";

import { VehicleWarningSection } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/VehicleWarningSection",
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
