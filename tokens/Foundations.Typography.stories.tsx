import type { Meta, StoryObj } from "@storybook/react";

import tokens from "../build/js/tokens.js";

const meta = {
  title: "Foundations/Typography",
  parameters: {
    layout: "fullscreen"
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

type TypographyToken = {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: number;
};

type TypographySection = {
  title: string;
  rows: Array<{
    tokenPath: string;
    value: TypographyToken;
  }>;
};

const sampleText = "초보자도 언제 어디서나, 쉬운 차량 관리";

function getTypographyToken(path: string): TypographyToken {
  return path.split(".").reduce<unknown>((current, key) => {
    if (typeof current === "object" && current !== null && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, tokens) as TypographyToken;
}

const sections: TypographySection[] = [
  {
    title: "Heading",
    rows: [
      { tokenPath: "heading.xlarge", value: getTypographyToken("heading.xlarge") },
      { tokenPath: "heading.large", value: getTypographyToken("heading.large") }
    ]
  },
  {
    title: "Title",
    rows: [
      { tokenPath: "title.large", value: getTypographyToken("title.large") },
      { tokenPath: "title.medium", value: getTypographyToken("title.medium") },
      { tokenPath: "title.medium-strong", value: getTypographyToken("title.medium-strong") }
    ]
  },
  {
    title: "Body",
    rows: [
      { tokenPath: "body.large-strong", value: getTypographyToken("body.large-strong") },
      { tokenPath: "body.large", value: getTypographyToken("body.large") },
      { tokenPath: "body.medium", value: getTypographyToken("body.medium") },
      { tokenPath: "body.medium-muted", value: getTypographyToken("body.medium-muted") },
      { tokenPath: "body.medium-light", value: getTypographyToken("body.medium-light") }
    ]
  },
  {
    title: "Label",
    rows: [
      { tokenPath: "label.large", value: getTypographyToken("label.large") },
      { tokenPath: "label.medium", value: getTypographyToken("label.medium") },
      { tokenPath: "label.small", value: getTypographyToken("label.small") }
    ]
  },
  {
    title: "Caption",
    rows: [
      { tokenPath: "caption.medium", value: getTypographyToken("caption.medium") },
      { tokenPath: "caption.medium-light", value: getTypographyToken("caption.medium-light") },
      { tokenPath: "caption.small", value: getTypographyToken("caption.small") }
    ]
  }
];

function TypographyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "64px 88px",
        background: "#ffffff",
        boxSizing: "border-box",
        color: "#131417",
        fontFamily: "\"Asta Sans\", sans-serif"
      }}
    >
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "52px"
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "28px",
            lineHeight: 1.3,
            fontWeight: 700,
            letterSpacing: "-0.02em"
          }}
        >
          Typography
        </h1>
        <div
          style={{
            width: "100%",
            maxWidth: "860px",
            height: "1px",
            background: "#c7c9ce"
          }}
        />
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {sections.map((section) => (
          <section
            key={section.title}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "20px",
                lineHeight: 1.4,
                fontWeight: 700
              }}
            >
              {section.title}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {section.rows.map(({ tokenPath, value }) => (
                <div
                  key={tokenPath}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "160px minmax(240px, 1fr) minmax(180px, 220px)",
                    alignItems: "baseline",
                    columnGap: "28px"
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: 700,
                      color: "#131417"
                    }}
                  >
                    {tokenPath}
                  </div>
                  <div
                    style={{
                      fontFamily: value.fontFamily,
                      fontWeight: value.fontWeight as never,
                      fontSize: `${value.fontSize}px`,
                      lineHeight: value.lineHeight,
                      color: "#131417",
                      minWidth: 0,
                      wordBreak: "keep-all"
                    }}
                  >
                    {sampleText}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "flex-start",
                      flexWrap: "wrap",
                      gap: "12px",
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#131417",
                      minWidth: 0
                    }}
                  >
                    <strong style={{ fontWeight: 700 }}>{value.fontWeight}</strong>
                    <span>{value.fontSize}pt</span>
                    <span>{value.lineHeight.replace("px", "")}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

export const Reference: Story = {
  render: () => <TypographyPage />
};
