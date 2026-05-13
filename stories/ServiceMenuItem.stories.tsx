import type { Meta, StoryObj } from "@storybook/react";

import { ServiceMenuItem } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/ServiceMenuItem",
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
