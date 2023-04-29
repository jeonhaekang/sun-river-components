import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "../../layouts";
import { theme } from "../../styles";
import { utils } from "../../utils";
import { getObjectKeys } from "../../utils/common/getObjectProperties";
import { STATUS } from "../Input";
import { TextArea } from "./TextArea";
import { TEXTAREA_DEFAULT, TEXTAREA_RESIZE } from "./TextArea.constants";

const {
  common,
  story: { docs, control }
} = utils;

const meta = {
  component: TextArea,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <Flex gap={12}>
        <Story />
      </Flex>
    )
  ]
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...TEXTAREA_DEFAULT,
    disabled: false,
    placeholder: "placeholder"
  }
};
docs.description({
  story: Default,
  desc: `\`type\`을 제외한 \`input\`의 \`props\`를 사용할 수 있습니다.`
});

export const Sizes: Story = {
  ...Default,
  render: arg => (
    <>
      {getObjectKeys(theme.size).map(size => {
        return <TextArea key={size} {...arg} size={size} placeholder={size} />;
      })}
    </>
  )
};
docs.description({
  story: Sizes,
  desc: `선택 가능한 \`TextArea\`의 크기는 아래와 같습니다. <br/> \`size\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    common.getObjectKeys(theme.size)
  )}를 제공합니다.`
});
control.hide({ story: Sizes, property: "size" });

export const Status: Story = {
  ...Default,
  render: arg => {
    return (
      <>
        {STATUS.map(status => (
          <TextArea
            key={status}
            {...arg}
            status={status}
            placeholder={status}
          />
        ))}
      </>
    );
  }
};
docs.description({
  story: Status,
  desc: `선택 가능한 \`TextArea\`의 상태는 아래와 같습니다. <br/> \`status\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    STATUS
  )}를 제공합니다.`
});
control.hide({ story: Status, property: "status" });

export const Resizes: Story = {
  ...Default,
  render: arg => {
    return (
      <>
        {TEXTAREA_RESIZE.map(resize => (
          <TextArea
            key={resize}
            {...arg}
            resize={resize}
            placeholder={resize}
          />
        ))}
      </>
    );
  }
};
docs.description({
  story: Resizes,
  desc: `선택 가능한 \`TextArea\`의 \`resize\`는 아래와 같습니다. <br/> \`resize\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    TEXTAREA_RESIZE
  )}를 제공합니다.`
});
control.hide({ story: Resizes, property: "resize" });
