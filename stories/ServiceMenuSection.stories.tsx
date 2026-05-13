import type { Meta, StoryObj } from "@storybook/react";

import { ServiceMenuSection } from "../components";
import { StoryCanvas } from "./story-helpers";

const meta = {
  title: "Components/ServiceMenuSection",
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
