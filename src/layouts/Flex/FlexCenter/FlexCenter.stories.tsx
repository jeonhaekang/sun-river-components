import type { Meta, StoryObj } from "@storybook/react";
import { Dummy } from "../../../components/Dummy";
import { theme } from "../../../styles";
import { utils } from "../../../utils";
import { FlexCenter } from "./FlexCenter";

const {
  story: { docs, control }
} = utils;

const meta = {
  component: FlexCenter,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select"
    }
  }
} satisfies Meta<typeof FlexCenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    display: "flex",
    direction: "row",
    gap: 12
  },
  render: arg => {
    return (
      <FlexCenter {...arg}>
        <Dummy bgColor={theme.colors.gray2} />
        <Dummy bgColor={theme.colors.gray3} />
        <Dummy bgColor={theme.colors.gray4} />
      </FlexCenter>
    );
  }
};

control.hide({
  story: Default,
  property: "as"
});

docs.description({
  story: Default,
  desc: `\`align\`, \`justify\`의 값이 \`center\`인  레이아웃을 제공합니다. <br/>기본은 \`div\`태그로 설정되어 있으며, \`as\`속성을 통해 원하는 태그를 지정할 수 있습니다.`
});
