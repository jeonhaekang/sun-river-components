import type { Meta, StoryObj } from "@storybook/react";
import { Flex, theme } from "~/styles";
import { utils } from "~/utils";
import { Spinner } from "./Spinner";
import { spinnerSpeed, spinnerWidth } from "./Spinner.constants";

const {
  common,
  story: { docs, control }
} = utils;

const meta = {
  component: Spinner,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <Flex gap={12}>
        <Story />
      </Flex>
    )
  ]
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "blue",
    width: "normal",
    speed: "normal",
    size: "medium"
  }
};
docs.description({
  story: Default,
  desc: `속성을 선택하지 않은 기본적인 스피너 입니다.`
});

export const Colors: Story = {
  ...Default,
  render: args => {
    return (
      <>
        {common.getObjectKeys(theme.colors).map(color => (
          <Spinner key={color} {...args} color={color} />
        ))}
      </>
    );
  }
};
docs.description({
  story: Colors,
  desc: `선택 가능한 스피너의 컬러는 아래와 같습니다. <br/> \`color\` 속성을 통해 선택할 수 있습니다.`
});
control.disabled({ story: Colors, property: "color" });

export const Width: Story = {
  ...Default,
  render: args => {
    return (
      <>
        {spinnerWidth.map(width => (
          <Spinner key={width} {...args} width={width} />
        ))}
      </>
    );
  }
};
docs.description({
  story: Width,
  desc: `선택 가능한 스피너의 두께는 아래와 같습니다. <br/> \`width\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    common.getObjectKeys(theme.colors)
  )}를 제공합니다. `
});
control.disabled({ story: Width, property: "width" });

export const Sizes: Story = {
  ...Default,
  render: args => {
    return (
      <>
        {common.getObjectKeys(theme.size).map(size => (
          <Spinner key={size} {...args} size={size} />
        ))}
      </>
    );
  }
};
docs.description({
  story: Sizes,
  desc: `선택 가능한 스피너의 크기는 아래와 같습니다. <br/> \`size\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    common.getObjectKeys(theme.size)
  )}를 제공합니다. `
});
control.disabled({ story: Sizes, property: "size" });

export const Speed: Story = {
  ...Default,
  render: args => {
    return (
      <>
        {spinnerSpeed.map(speed => (
          <Spinner key={speed} {...args} speed={speed} />
        ))}
      </>
    );
  }
};
docs.description({
  story: Speed,
  desc: `선택 가능한 스피너의 속도는 아래와 같습니다. <br/> \`speed\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    spinnerSpeed
  )}를 제공합니다. `
});
control.disabled({ story: Speed, property: "speed" });
