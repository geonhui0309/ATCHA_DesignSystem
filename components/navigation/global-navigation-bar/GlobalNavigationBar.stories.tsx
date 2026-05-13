import type { Meta, StoryObj } from "@storybook/react";

import { GlobalNavigationBar } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Navigation/GlobalNavigationBar",
  component: GlobalNavigationBar,
  render: (args) => (
    <StoryCanvas width={360}>
      <GlobalNavigationBar {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof GlobalNavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
