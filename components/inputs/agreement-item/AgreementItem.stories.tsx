import type { Meta, StoryObj } from "@storybook/react";

import { AgreementItem } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const detailText = `1. 개인정보의 수집항목 및 수집방법
통계청 나라통계사이트에서는 기본적인 회원 서비스 제공을 위한 필수정보로 실명인증정보와 가입정보로 구분하여 다음의 정보를 수집하고 있습니다. 필수정보를 입력해주셔야 회원 서비스 이용이 가능합니다.

가. 수집하는 개인정보의 항목
* 수집하는 필수항목
- 실명인증정보 : 이름, 휴대전화번호, 본인 인증 또는 I-PIN(개인식별번호)
- 가입정보 : 아이디, 비밀번호, 성명, 이메일, 휴대전화번호, 기관명(운영회원)`;

const meta = {
  title: "Components/Inputs/AgreementItem",
  component: AgreementItem,
  args: {
    title: "서비스 이용약관",
    selectionType: "required",
    checked: true,
    expanded: false,
    detailText
  },
  render: (args) => (
    <StoryCanvas width={312}>
      <AgreementItem {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof AgreementItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Expanded: Story = {
  args: {
    expanded: true
  }
};
