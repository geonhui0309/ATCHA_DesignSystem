import type { Meta, StoryObj } from "@storybook/react";

import { VehicleStatusCard } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/VehicleStatusCard",
  component: VehicleStatusCard,
  render: (args) => (
    <StoryCanvas width={360}>
      <VehicleStatusCard {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof VehicleStatusCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
