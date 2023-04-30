import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "../../layouts";
import { theme } from "../../styles";
import { utils } from "../../utils";
import { Radio } from "./Radio";
import { RADIO_DEFAULT } from "./Radio.constants";

const {
  common,
  story: { docs, control }
} = utils;

const meta = {
  component: Radio,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <Flex gap={24}>
        <Story />
      </Flex>
    )
  ]
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...RADIO_DEFAULT,
    children: "label"
  }
};
docs.description({
  story: Default,
  desc: `\`type\`을 제외한 \`input\`의 \`props\`를 사용할 수 있습니다.`
});

export const Colors: Story = {
  ...Default,
  render: arg => {
    return (
      <>
        {common.getObjectKeys(theme.palettes).map(color => (
          <Radio {...arg} color={color} defaultChecked>
            {color}
          </Radio>
        ))}
      </>
    );
  }
};
docs.description({
  story: Colors,
  desc: `선택 가능한 라디오 버튼의 컬러는 아래와 같습니다. <br/> \`color\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    common.getObjectKeys(theme.palettes)
  )}를 제공합니다.`
});
control.hide({
  story: Colors,
  property: "color"
});
