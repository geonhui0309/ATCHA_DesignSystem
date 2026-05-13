import type { Meta, StoryObj } from "@storybook/react";

import { VehicleStatusCard } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Cards/VehicleStatusCard",
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
