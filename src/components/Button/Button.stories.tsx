import type { Meta, StoryObj } from "@storybook/react";
import { theme } from "~/styles";
import { getObjectKeys } from "~/utils";
import { Button } from "./Button";

const meta = {
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 속성을 선택하지 않은 기본적인 버튼 형태입니다.
 */
export const Default: Story = {
  args: {
    label: "Button",
    variant: "default",
    color: "blue",
    size: "medium",
    disabled: false
  }
};

/**
 * 선택 가능한 버튼의 형태는 아래와 같습니다. <br/>
 * `variant` 속성을 통해 선택할 수 있으며, 왼쪽부터 `default`, `outline`, `text`에 해당합니다.
 */
export const Variants: Story = {
  ...Default,
  render: arg => {
    const variants = ["default", "outline", "text"] as const;

    return (
      <>
        {variants.map(variant => (
          <Button {...arg} key={variant} variant={variant} />
        ))}
      </>
    );
  }
};

/**
 * 선택 가능한 버튼의 크기는 아래와 같습니다. <br/>
 * `size` 속성을 통해 선택할 수 있으며 `small`, `medium`, `large`를 제공합니다.
 */
export const Sizes: Story = {
  ...Default,
  render: arg => {
    const sizes = ["small", "medium", "large"] as const;

    return (
      <>
        {sizes.map(size => (
          <Button {...arg} key={size} size={size} />
        ))}
      </>
    );
  }
};

/**
 * 선택 가능한 버튼의 컬러는 아래와 같습니다. <br/>
 * `color` 속성을 통해 선택할 수 있습니다.
 */
export const Colors: Story = {
  ...Default,
  render: arg => {
    return (
      <>
        {getObjectKeys(theme.palettes).map(color => (
          <Button {...arg} key={color} color={color} />
        ))}
      </>
    );
  }
};
