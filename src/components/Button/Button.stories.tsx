import type { Meta, StoryObj } from "@storybook/react";
import { Flex, theme } from "~/styles";
import { utils } from "~/utils";
import { getObjectKeys } from "~/utils/common/getObjectProperties";
import { Button } from "./Button";
import { buttonVariants } from "./Button.constants";

const {
  common,
  story: { docs, control }
} = utils;

const meta = {
  component: Button,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <Flex gap={12}>
        <Story />
      </Flex>
    )
  ]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button",
    variant: "default",
    color: "blue",
    size: "medium",
    disabled: false,
    isLoading: false
  }
};
docs.description({
  story: Default,
  desc: `속성을 선택하지 않은 기본적인 버튼 입니다.`
});

export const Variants: Story = {
  ...Default,
  render: arg => {
    return (
      <>
        {buttonVariants.map(variant => (
          <Button {...arg} key={variant} variant={variant} />
        ))}
      </>
    );
  }
};
docs.description({
  story: Variants,
  desc: `선택 가능한 버튼의 형태는 아래와 같습니다. <br/> \`variant\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    buttonVariants
  )}를 제공합니다.`
});
control.disabled({ story: Variants, property: "variant" });

export const Sizes: Story = {
  ...Default,
  render: arg => {
    return (
      <>
        {getObjectKeys(theme.size).map(size => (
          <Button {...arg} key={size} size={size} />
        ))}
      </>
    );
  }
};
docs.description({
  story: Sizes,
  desc: `선택 가능한 버튼의 크기는 아래와 같습니다. <br/> \`size\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    getObjectKeys(theme.size)
  )}를 제공합니다.`
});
control.disabled({ story: Sizes, property: "size" });

export const Colors: Story = {
  ...Default,
  render: arg => {
    return (
      <>
        {common.getObjectKeys(theme.palettes).map(color => (
          <Button {...arg} key={color} color={color} />
        ))}
      </>
    );
  }
};
docs.description({
  story: Colors,
  desc: `선택 가능한 버튼의 컬러는 아래와 같습니다. <br/> \`color\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    getObjectKeys(theme.palettes)
  )}를 제공합니다.`
});
control.disabled({ story: Colors, property: "size" });
