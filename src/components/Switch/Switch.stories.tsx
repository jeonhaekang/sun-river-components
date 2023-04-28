import type { Meta, StoryObj } from "@storybook/react";
import { theme } from "../../styles";
import { utils } from "../../utils";
import { getObjectKeys } from "../../utils/common/getObjectProperties";
import { Switch } from "./Switch";
import { SWITCH_DEFAULT } from "./Switch.constants";

const {
  common,
  story: { docs, control }
} = utils;

const meta = {
  component: Switch,
  tags: ["autodocs"]
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...SWITCH_DEFAULT,
    disabled: false
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
        {getObjectKeys(theme.palettes).map(color => (
          <Switch {...arg} color={color} defaultChecked />
        ))}
      </>
    );
  }
};
docs.description({
  story: Colors,
  desc: `선택 가능한 버튼의 컬러는 아래와 같습니다. <br/> \`color\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    common.getObjectKeys(theme.palettes)
  )}를 제공합니다.`
});
control.hide({
  story: Colors,
  property: "color"
});
