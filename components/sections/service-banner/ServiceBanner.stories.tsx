import type { Meta, StoryObj } from "@storybook/react";

import { ServiceBanner } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Sections/ServiceBanner",
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
