import type { Meta, StoryObj } from "@storybook/react";

import { DiagnosticListSection } from "./index";
import { StoryCanvas } from "../../components/shared/story-helpers";

const meta = {
  title: "Patterns/DiagnosticListSection",
  component: DiagnosticListSection,
  render: (args) => (
    <StoryCanvas width={360}>
      <DiagnosticListSection {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof DiagnosticListSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
