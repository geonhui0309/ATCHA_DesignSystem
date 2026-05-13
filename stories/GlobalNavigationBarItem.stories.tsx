import type { Meta, StoryObj } from "@storybook/react";

import { GlobalNavigationBarItemComponent } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/GlobalNavigationBarItem",
  component: GlobalNavigationBarItemComponent,
  render: (args) => (
    <StoryCanvas>
      <GlobalNavigationBarItemComponent {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof GlobalNavigationBarItemComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "홈",
    active: true
  }
};
