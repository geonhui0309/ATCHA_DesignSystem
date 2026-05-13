import type { Meta, StoryObj } from "@storybook/react";

import { GlobalNavigationBarItemComponent } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Navigation/GlobalNavigationBarItem",
  component: GlobalNavigationBarItemComponent,
  render: (args) => (
    <StoryCanvas width={78}>
      <div style={{ width: 78 }}>
        <GlobalNavigationBarItemComponent {...args} />
      </div>
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
