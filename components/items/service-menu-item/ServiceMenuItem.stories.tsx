import type { Meta, StoryObj } from "@storybook/react";

import { ServiceMenuItem } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Items/ServiceMenuItem",
  component: ServiceMenuItem,
  render: (args) => (
    <StoryCanvas width={312}>
      <ServiceMenuItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof ServiceMenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: "engine-oil"
  }
};
