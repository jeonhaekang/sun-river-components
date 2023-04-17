import { Button } from "@components/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { FlexColumn, theme } from "~/styles";
import { utils } from "~/utils";
import { getObjectKeys } from "~/utils/common/getObjectProperties";
import { Input } from "./Input";
import { DEFAULT, STATUS } from "./Input.constants";

const {
  common,
  story: { docs, control }
} = utils;

const addonOptions = {
  none: undefined
};

const leftAddonOptions = {
  ...addonOptions,
  label: "https://"
};

const rightAddonOptions = {
  ...addonOptions,
  label: ".com"
};

const meta = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    leftAddon: {
      control: "radio",
      options: leftAddonOptions
    },
    rightAddon: {
      control: "radio",
      options: rightAddonOptions
    }
  },
  decorators: [
    Story => (
      <FlexColumn gap={12}>
        <Story />
      </FlexColumn>
    )
  ]
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...DEFAULT,
    disabled: false,
    readOnly: false,
    placeholder: "placeholder"
  }
};
docs.description({
  story: Default,
  desc: `속성을 선택하지 않은 기본적인 인풋 입니다.`
});

export const Sizes: Story = {
  ...Default,
  render: arg => {
    return (
      <>
        {getObjectKeys(theme.size).map(size => (
          <Input key={size} {...arg} size={size} placeholder={size} />
        ))}
      </>
    );
  }
};
docs.description({
  story: Sizes,
  desc: `선택 가능한 인풋의 크기는 아래와 같습니다. <br/> \`size\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    getObjectKeys(theme.size)
  )}를 제공합니다.`
});
control.disabled({ story: Sizes, property: "size" });

export const Status: Story = {
  ...Default,
  render: arg => {
    return (
      <>
        {STATUS.map(status => (
          <Input key={status} {...arg} status={status} placeholder={status} />
        ))}
      </>
    );
  }
};
docs.description({
  story: Status,
  desc: `선택 가능한 인풋의 상태는 아래와 같습니다. <br/> \`status\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    STATUS
  )}를 제공합니다.`
});
control.disabled({ story: Status, property: "status" });

export const Addon: Story = {
  ...Default,
  render: arg => {
    return (
      <>
        <Input {...arg} leftAddon="Email." placeholder="sun@river.com" />

        <Input {...arg} leftAddon="http://" rightAddon=".com" />

        <Input {...arg} rightAddon={<Button variant="text" label="Submit" />} />
      </>
    );
  }
};
docs.description({
  story: Addon,
  desc: `\`leftAddon\`, \`rightAddon\` 속성을 통해 사용할 수 있으며, \`ReactNode\`를 할당할 수 있습니다. <br/> 아래와 같은 방식으로 사용할 수 있습니다.`
});
