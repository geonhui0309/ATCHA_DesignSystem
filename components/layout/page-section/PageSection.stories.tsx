import type { Meta, StoryObj } from "@storybook/react";

import { Button, PageSection } from "../../index";

const meta = {
  title: "Components/Layout/PageSection",
  component: PageSection,
  render: (args) => (
    <div style={{ padding: 24, width: 360 }}>
      <PageSection {...args}>
        <div style={{ height: 88, borderRadius: 16, background: "#f7f8fa" }} />
        <div style={{ height: 88, borderRadius: 16, background: "#edeef2" }} />
      </PageSection>
    </div>
  )
} satisfies Meta<typeof PageSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "차량 상태",
    description: "현재 차량 관련 핵심 정보를 섹션 단위로 정리합니다."
  }
};

export const WithAction: Story = {
  args: {
    title: "서비스 메뉴",
    trailing: (
      <Button variant="text" size="xsmall" iconRight={true}>
        더보기
      </Button>
    )
  }
};
