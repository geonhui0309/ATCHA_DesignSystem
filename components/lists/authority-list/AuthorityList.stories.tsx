import type { Meta, StoryObj } from "@storybook/react";

import { AuthorityList } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Lists/AuthorityList",
  component: AuthorityList,
  render: (args) => (
    <StoryCanvas width={312}>
      <AuthorityList {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof AuthorityList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
