import type { Meta, StoryObj } from "@storybook/react";

import { AuthorityItem } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/AuthorityItem",
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
