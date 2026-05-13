import type { Meta, StoryObj } from "@storybook/react";

import { Thumbnail } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/Thumbnail",
  component: Thumbnail,
  render: (args) => (
    <StoryCanvas>
      <Thumbnail {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof Thumbnail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "item-thumbnail"
  }
};
