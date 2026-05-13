import type { ReactNode } from "react";

export function StoryCanvas({
  children,
  width = "fit-content"
}: {
  children: ReactNode;
  width?: number | string;
}) {
  const resolvedWidth = typeof width === "number" ? `${width}px` : width;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        padding: "24px",
        borderRadius: "24px",
        background: "var(--color-background-elevated, #ffffff)",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "24px",
          width: resolvedWidth,
          maxWidth: "100%"
        }}
      >
        {children}
      </div>
    </div>
  );
}
