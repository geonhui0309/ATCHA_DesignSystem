import type { Meta, StoryObj } from "@storybook/react";

import { AuthorityItem } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Items/AuthorityItem",
  component: AuthorityItem,
  render: (args) => (
    <StoryCanvas width={360}>
      <AuthorityItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof AuthorityItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
