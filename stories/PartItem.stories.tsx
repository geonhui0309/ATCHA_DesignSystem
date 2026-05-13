import type { Meta, StoryObj } from "@storybook/react";

import { PartItem } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/PartItem",
  component: PartItem,
  render: (args) => (
    <StoryCanvas width={360}>
      <PartItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof PartItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
