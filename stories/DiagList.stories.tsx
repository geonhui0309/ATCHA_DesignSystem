import type { Meta, StoryObj } from "@storybook/react";

import { DiagList } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/DiagList",
  component: DiagList,
  render: (args) => (
    <StoryCanvas width={360}>
      <DiagList {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof DiagList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
