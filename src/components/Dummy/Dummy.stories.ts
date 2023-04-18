import type { Meta, StoryObj } from "@storybook/react";
import { utils } from "../../utils";
import { Dummy } from "./Dummy";
import { DEFAULT, UNIT } from "./Dummy.constants";

const {
  common,
  story: { docs }
} = utils;

const meta = {
  component: Dummy,
  tags: ["autodocs"],
  argTypes: {
    bgColor: {
      control: "color"
    }
  }
} satisfies Meta<typeof Dummy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...DEFAULT
  }
};
docs.description({
  story: Default,
  desc: `더미 컴포넌트 입니다. ${common.propertiesToString(
    UNIT
  )}단위로 크기를 지정할 수 있으며, 해당 단위를 px로 변환하여 표기합니다.`
});
