import type { Meta, StoryObj } from "@storybook/react";

import { ServiceItem } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Items/ServiceItem",
  component: ServiceItem,
  render: (args) => (
    <StoryCanvas width={312}>
      <ServiceItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof ServiceItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    serviceType: "washer"
  }
};
