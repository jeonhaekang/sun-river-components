import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta = {
  component: Spinner,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <div
        style={{
          display: "flex",
          gap: "12px"
        }}
      >
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 속성을 선택하지 않은 기본적인 버튼 형태입니다.
 */
export const Default: Story = {
  args: {
    color: "blue",
    width: "normal",
    speed: "normal",
    size: "medium"
  }
};
