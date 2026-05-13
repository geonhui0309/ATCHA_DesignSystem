import type { Meta, StoryObj } from "@storybook/react";

import { DiagItem } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/DiagItem",
  component: DiagItem,
  render: (args) => (
    <StoryCanvas width={360}>
      <DiagItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof DiagItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
