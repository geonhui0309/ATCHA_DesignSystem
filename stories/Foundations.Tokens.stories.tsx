import type { Meta, StoryObj } from "@storybook/react";

import tokens from "../build/js/tokens.js";

const meta = {
  title: "Foundations/Tokens",
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const PRIMITIVE_KEYS = new Set([
  "blue",
  "gray",
  "green",
  "primary",
  "red",
  "yellow",
  "radius",
  "size",
  "spacing",
  "fontFamilies",
  "fontSize",
  "fontWeights",
  "lineHeight"
]);

const SEMANTIC_KEYS = new Set([
  "background",
  "border",
  "icon",
  "interaction",
  "overlay",
  "text",
  "body",
  "caption",
  "heading",
  "label",
  "title"
]);

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isColorValue(value: unknown): value is string {
  return typeof value === "string" && (/^#/.test(value) || /^rgb/.test(value));
}

function flattenEntries(
  source: Record<string, unknown>,
  prefix = ""
): Array<[string, unknown]> {
  return Object.entries(source).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;

    if (isObject(value)) {
      return flattenEntries(value, path);
    }

    return [[path, value] as [string, unknown]];
  });
}

function TokenSection({
  title,
  description,
  entries
}: {
  title: string;
  description: string;
  entries: Array<[string, unknown]>;
}) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <h2 style={{ margin: 0, fontSize: "20px", lineHeight: 1.3 }}>{title}</h2>
        <p style={{ margin: 0, fontSize: "13px", color: "#666666" }}>{description}</p>
      </div>
      <div style={{ display: "grid", gap: "12px" }}>
        {entries.map(([key, value]) => (
          <div
            key={key}
            style={{
              display: "grid",
              gridTemplateColumns: isColorValue(value) ? "160px 120px 1fr" : "160px 1fr",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "12px",
              background: "#ffffff"
            }}
          >
            <strong style={{ fontSize: "13px" }}>{key}</strong>
            {isColorValue(value) ? (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "999px",
                    background: value,
                    border: "1px solid #d9d9d9"
                  }}
                />
                <code style={{ fontSize: "12px" }}>{value}</code>
              </span>
            ) : null}
            <code style={{ fontSize: "12px", whiteSpace: "pre-wrap" }}>
              {typeof value === "object" ? JSON.stringify(value) : String(value)}
            </code>
          </div>
        ))}
      </div>
    </section>
  );
}

function TokensPage() {
  const tokenMap = tokens as Record<string, unknown>;
  const primitiveSections = Object.entries(tokenMap)
    .filter(([key, value]) => PRIMITIVE_KEYS.has(key) && isObject(value))
    .flatMap(([key, value]) => flattenEntries(value, key));

  const semanticSections = Object.entries(tokenMap)
    .filter(([key, value]) => SEMANTIC_KEYS.has(key) && isObject(value))
    .flatMap(([key, value]) => flattenEntries(value, key));

  const componentSections = Object.entries(tokenMap)
    .filter(([key, value]) => !PRIMITIVE_KEYS.has(key) && !SEMANTIC_KEYS.has(key) && isObject(value))
    .flatMap(([key, value]) => flattenEntries(value, key));

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px",
        background: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        boxSizing: "border-box"
      }}
    >
      <header style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h1 style={{ margin: 0, fontSize: "28px", lineHeight: 1.3 }}>Token Reference</h1>
        <p style={{ margin: 0, fontSize: "14px", color: "#666666" }}>
          현재 빌드된 토큰을 Primitive, Semantic, Component 기준으로 나눠 보여줍니다.
        </p>
      </header>
      <TokenSection
        title="Primitive"
        description="원시값 토큰입니다. 색상, 간격, 반경, 타이포 기본값처럼 가장 바닥 레이어입니다."
        entries={primitiveSections}
      />
      <TokenSection
        title="Semantic"
        description="의미 기반 토큰입니다. background, text, border처럼 역할 중심으로 재구성된 값입니다."
        entries={semanticSections}
      />
      <TokenSection
        title="Component"
        description="컴포넌트 전용 토큰입니다. 특정 variant나 상태에 종속된 값입니다."
        entries={componentSections}
      />
    </main>
  );
}

export const Reference: Story = {
  render: () => <TokensPage />
};
