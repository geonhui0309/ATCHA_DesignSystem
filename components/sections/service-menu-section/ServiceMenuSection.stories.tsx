import type { Meta, StoryObj } from "@storybook/react";

import { ServiceMenuSection } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Sections/ServiceMenuSection",
  component: ServiceMenuSection,
  render: (args) => (
    <StoryCanvas width={360}>
      <ServiceMenuSection {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof ServiceMenuSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
