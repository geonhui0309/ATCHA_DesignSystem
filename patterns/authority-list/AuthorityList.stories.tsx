import type { Meta, StoryObj } from "@storybook/react";

import { AuthorityList } from "./index";
import { StoryCanvas } from "../../components/shared/story-helpers";

const meta = {
  title: "Patterns/AuthorityList",
  component: AuthorityList,
  render: (args) => (
    <StoryCanvas width={360}>
      <AuthorityList {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof AuthorityList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
