import type { Meta, StoryObj } from "@storybook/react";

import { DiagnosticDetailItem } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Items/DiagnosticDetailItem",
  component: DiagnosticDetailItem,
  render: (args) => (
    <StoryCanvas width={312}>
      <DiagnosticDetailItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof DiagnosticDetailItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
