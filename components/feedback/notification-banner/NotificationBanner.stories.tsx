import type { Meta, StoryObj } from "@storybook/react";

import { NotificationBanner } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Feedback/NotificationBanner",
  component: NotificationBanner,
  render: (args) => (
    <StoryCanvas width={360}>
      <NotificationBanner {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof NotificationBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actionLabel: "진단하기"
  }
};
