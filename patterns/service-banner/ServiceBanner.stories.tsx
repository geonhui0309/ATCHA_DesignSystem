import type { Meta, StoryObj } from "@storybook/react";

import { ServiceBanner } from "./index";
import { StoryCanvas } from "../../components/shared/story-helpers";

const meta = {
  title: "Patterns/ServiceBanner",
  component: ServiceBanner,
  render: (args) => (
    <StoryCanvas>
      <ServiceBanner {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof ServiceBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Scheduled: Story = {
  args: {
    state: "scheduled"
  }
};

export const InProgress: Story = {
  args: {
    state: "in-progress"
  }
};
