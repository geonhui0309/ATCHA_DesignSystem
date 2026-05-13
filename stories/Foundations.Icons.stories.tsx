import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "../components";
import type { IconName } from "../icons/Icon.types";
import { iconRegistry } from "../icons/registry";

const iconNames = Object.keys(iconRegistry) as IconName[];

const meta = {
  title: "Foundations/Icons",
  component: Icon,
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

function IconGallery() {
  return (
    <main
      style={{
        padding: "32px",
        background: "#f5f5f5",
        minHeight: "100vh",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "16px"
        }}
      >
        {iconNames.map((name) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              padding: "16px",
              borderRadius: "16px",
              background: "#ffffff"
            }}
          >
            <Icon name={name} size={24} />
            <span
              style={{
                fontSize: "12px",
                lineHeight: 1.4,
                textAlign: "center",
                wordBreak: "break-word"
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

export const Gallery: Story = {
  render: () => <IconGallery />
};
