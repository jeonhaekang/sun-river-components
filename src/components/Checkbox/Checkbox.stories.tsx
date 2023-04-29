import type { Meta, StoryObj } from "@storybook/react";
import { theme } from "../../styles";
import { utils } from "../../utils";
import { Checkbox } from "./Checkbox";
import { CHECKBOX_DEFAULT, CHECKBOX_MARK } from "./Checkbox.constants";

const {
  common,
  story: { docs, control }
} = utils;

const meta = {
  component: Checkbox,
  tags: ["autodocs"]
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...CHECKBOX_DEFAULT
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
          <Checkbox {...arg} color={color} defaultChecked />
        ))}
      </>
    );
  }
};
docs.description({
  story: Colors,
  desc: `선택 가능한 체크박스의 컬러는 아래와 같습니다. <br/> \`color\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    common.getObjectKeys(theme.palettes)
  )}를 제공합니다.`
});
control.hide({
  story: Colors,
  property: "color"
});

export const Marks: Story = {
  ...Default,
  render: arg => {
    return (
      <>
        {CHECKBOX_MARK.map(mark => (
          <Checkbox {...arg} mark={mark} defaultChecked />
        ))}
      </>
    );
  }
};
docs.description({
  story: Marks,
  desc: `선택 가능한 체크마크는 아래와 같습니다. <br/> \`mark\` 속성을 통해 선택할 수 있으며 ${common.propertiesToString(
    CHECKBOX_MARK
  )}를 제공합니다.`
});
control.hide({
  story: Marks,
  property: "mark"
});
