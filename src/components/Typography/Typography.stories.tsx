import type { Meta, StoryObj } from "@storybook/react";
import { FlexColumn } from "../../layouts";
import { fontSize, theme } from "../../styles";
import { utils } from "../../utils";
import { Typography } from "./Typography";
import { DEFAULT } from "./Typography.constants";

const {
  common,
  story: { docs, control }
} = utils;

const meta = {
  component: Typography,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <FlexColumn gap={6}>
        <Story />
      </FlexColumn>
    )
  ]
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...DEFAULT,
    children: "typography"
  }
};
docs.description({
  story: Default,
  desc: `정해진 규격의 \`Typography\`를 제공합니다. \`rem\`을 기반으로 사이즈가 변경됩니다.`
});

export const Sizes: Story = {
  ...Default,
  render: arg => {
    return (
      <>
        {common.getObjectKeys(fontSize).map(size => (
          <Typography {...arg} key={size} size={size} />
        ))}
      </>
    );
  }
};
docs.description({
  story: Sizes,
  desc: `선택 가능한 크기는 아래와 같습니다. <br/> \`size\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    common.getObjectKeys(fontSize)
  )}를 제공합니다.`
});
control.disabled({ story: Sizes, property: "size" });

export const Colors: Story = {
  ...Default,
  render: arg => {
    return (
      <>
        {common.getObjectKeys(theme.colors).map(color => (
          <Typography {...arg} key={color} color={color} />
        ))}
      </>
    );
  }
};
docs.description({
  story: Colors,
  desc: `선택 가능한 색상은 아래와 같습니다. <br/> \`size\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    common.getObjectKeys(theme.colors)
  )}를 제공합니다.`
});
control.disabled({ story: Colors, property: "color" });
