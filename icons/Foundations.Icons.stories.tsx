import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "../components";
import type { IconName } from "./Icon.types";
import { iconRegistry } from "./registry";

const groupedIcons = Object.entries(iconRegistry).reduce<
  Record<string, IconName[]>
>((groups, [name, definition]) => {
  const family = definition.family;
  if (!groups[family]) {
    groups[family] = [];
  }
  groups[family].push(name as IconName);
  return groups;
}, {});

const familyOrder = ["system", "vehicle", "vehicle-warning", "authority", "status"];
const familyLabels: Record<string, string> = {
  system: "System",
  vehicle: "Vehicle",
  "vehicle-warning": "Vehicle Warning",
  authority: "Authority",
  status: "Status"
};

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
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {familyOrder
          .filter((family) => groupedIcons[family]?.length)
          .map((family) => (
            <section key={family} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: "18px",
                  lineHeight: 1.4,
                  fontWeight: 700,
                  color: "#111111"
                }}
              >
                {familyLabels[family] ?? family}
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                  gap: "16px"
                }}
              >
                {groupedIcons[family].map((name) => (
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
            </section>
          ))}
      </div>
    </main>
  );
}

export const Gallery: Story = {
  render: () => <IconGallery />
};
