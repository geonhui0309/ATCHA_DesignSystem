import type { Meta, StoryObj } from "@storybook/react";

import { ServiceBanner } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/ServiceBanner",
  component: ServiceBanner,
  render: (args) => (
    <StoryCanvas width={312}>
      <ServiceBanner {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof ServiceBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "scheduled"
  }
};
