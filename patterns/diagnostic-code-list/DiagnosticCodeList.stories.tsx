import type { Meta, StoryObj } from "@storybook/react";

import { DiagnosticCodeList } from "./index";
import { StoryCanvas } from "../../components/shared/story-helpers";

const meta = {
  title: "Patterns/DiagnosticCodeList",
  component: DiagnosticCodeList,
  render: (args) => (
    <StoryCanvas width={312}>
      <DiagnosticCodeList {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof DiagnosticCodeList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
