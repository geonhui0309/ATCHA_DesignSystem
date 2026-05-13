import type { Meta, StoryObj } from "@storybook/react";

import { ServiceItem } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/ServiceItem",
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
