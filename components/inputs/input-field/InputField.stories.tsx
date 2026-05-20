import type { Meta, StoryObj } from "@storybook/react";

import { InputField } from "../../index";
import { StoryCanvas } from "../../shared/story-helpers";

const meta = {
  title: "Components/Inputs/InputField",
  component: InputField,
  render: (args) => (
    <StoryCanvas width={312}>
      <InputField {...args} />
    </StoryCanvas>
  )
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "storybook-login-id",
    size: "large",
    placeholder: "아이디를 입력해주세요"
  }
};

export const LoginIdFilled: Story = {
  args: {
    id: "storybook-login-id-filled",
    size: "large",
    value: "ATCHA@google.com",
    status: "filled",
    trailingIcons: ["cancel"]
  }
};

export const LoginPassword: Story = {
  args: {
    id: "storybook-login-password",
    size: "large",
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
    trailingIcons: ["eye"]
  }
};

export const LoginError: Story = {
  args: {
    id: "storybook-login-id-error",
    size: "large",
    value: "ATCHA@google.com",
    status: "error",
    trailingIcons: ["error"],
    helperText: "아이디를 다시 확인해주세요"
  }
};

export const LoginFormBasic: Story = {
  render: () => (
    <StoryCanvas width={312}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "312px"
        }}
      >
        <InputField
          id="storybook-login-form-id"
          size="large"
          placeholder="아이디를 입력해주세요"
        />
        <InputField
          id="storybook-login-form-password"
          size="large"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          trailingIcons={["eye"]}
        />
      </div>
    </StoryCanvas>
  )
};
