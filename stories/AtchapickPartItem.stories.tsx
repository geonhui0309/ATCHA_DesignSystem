import type { Meta, StoryObj } from "@storybook/react";

import { AtchapickPartItem } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/AtchapickPartItem",
  component: AtchapickPartItem,
  render: (args) => (
    <StoryCanvas width={360}>
      <AtchapickPartItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof AtchapickPartItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
