import type { Meta, StoryObj } from "@storybook/react";
import { Dummy } from "../../../components/Dummy";
import { theme } from "../../../styles";
import { utils } from "../../../utils";
import { ALIGN_ITEMS, JUSTIFY_CONTENTS } from "../Flex.constants";
import { FlexColumn } from "./FlexColumn";

const {
  story: { docs, control }
} = utils;

const meta = {
  component: FlexColumn,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ALIGN_ITEMS
    },
    justify: {
      control: "select",
      options: JUSTIFY_CONTENTS
    }
  }
} satisfies Meta<typeof FlexColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    display: "flex",
    gap: 12
  },
  render: arg => {
    return (
      <FlexColumn {...arg}>
        <Dummy bgColor={theme.colors.gray2} />
        <Dummy bgColor={theme.colors.gray3} />
        <Dummy bgColor={theme.colors.gray4} />
      </FlexColumn>
    );
  }
};

control.hide({
  story: Default,
  property: "as"
});

docs.description({
  story: Default,
  desc: `\`direction\`의 값이 \`column\`인 레이아웃을 제공합니다. <br/>기본은 \`div\`태그로 설정되어 있으며, \`as\`속성을 통해 원하는 태그를 지정할 수 있습니다.`
});
