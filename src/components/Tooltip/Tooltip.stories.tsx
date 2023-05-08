import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "../../layouts";
import { theme } from "../../styles";
import { utils } from "../../utils";
import { getObjectKeys } from "../../utils/common/getObjectProperties";
import { Button } from "../Button";
import { Tooltip } from "./Tooltip";
import {
  TOOLTIP_ANCHOR,
  TOOLTIP_DEFAULT,
  TOOLTIP_DIRECTION
} from "./Tooltip.constants";

const {
  common,
  story: { docs, control }
} = utils;

const meta = {
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  decorators: [
    Story => (
      <div
        style={{
          padding: "50px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Flex gap={12}>
          <Story />
        </Flex>
      </div>
    )
  ]
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "tooltip",
    children: <Button label="tooltip" />,
    ...TOOLTIP_DEFAULT
  }
};
docs.description({
  story: Default,
  desc: `기본적인 툴팁 입니다. 툴팁은 여유 공간에 따라 자동적으로 위치가 조절됩니다.`
});

export const Colors: Story = {
  ...Default,
  render: args => {
    return (
      <>
        {getObjectKeys(theme.colors).map(color => (
          <Tooltip key={color} {...args} label={color} color={color}>
            <Button label={color} />
          </Tooltip>
        ))}
      </>
    );
  }
};
docs.description({
  story: Colors,
  desc: `선택 가능한 툴팁의 컬러는 아래와 같습니다. <br/> \`color\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    common.getObjectKeys(theme.colors)
  )}를 제공합니다.`
});
control.hide({ story: Colors, property: "label" });
control.hide({ story: Colors, property: "color" });

export const Direction: Story = {
  ...Default,
  render: args => {
    return (
      <>
        {TOOLTIP_DIRECTION.map(direction => (
          <Tooltip
            key={direction}
            {...args}
            label={direction}
            direction={direction}
          >
            <Button label={direction} />
          </Tooltip>
        ))}
      </>
    );
  }
};
docs.description({
  story: Direction,
  desc: `선택 가능한 툴팁의 방향은 아래와 같습니다. <br/> \`direction\` 속성을 통해 선택할 수 있으며 ${TOOLTIP_DIRECTION}를 제공합니다.`
});
control.hide({ story: Direction, property: "label" });
control.hide({ story: Direction, property: "direction" });

export const Anchor: Story = {
  ...Default,
  render: args => {
    return (
      <>
        {TOOLTIP_ANCHOR.map(anchor => (
          <Tooltip key={anchor} {...args} label={anchor} anchor={anchor}>
            <Button label={anchor} />
          </Tooltip>
        ))}
      </>
    );
  }
};
docs.description({
  story: Anchor,
  desc: `선택 가능한 툴팁의 중심축은 아래와 같습니다. <br/> \`anchor\` 속성을 통해 선택할 수 있으며 ${TOOLTIP_ANCHOR}를 제공합니다.`
});
control.hide({ story: Anchor, property: "label" });
control.hide({ story: Anchor, property: "anchor" });
